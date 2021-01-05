import storage from './storage'

export default class NativeSuggestions {
  STORAGE_KEY = 'native-suggestions'
  INPUT_TYPES = ['text', 'search', 'email', 'tel']
  SAVE_LENGTH = 10
  LIST_LENGTH = 10

  get isMobile() {
    return window.innerWidth <= 768
  }

  key = null
  input = null
  store = null
  datalist = null

  constructor (input, key) {
    if (!(input instanceof HTMLInputElement)) {
      console.warn('Element must be an input.', input)
      return
    }

    if (!this.INPUT_TYPES.includes(input.type)) {
      return
    }

    this.input = input
    this.key = key || (input.name && input.name === input.id ? `${input.name}_${input.id}` : input.name)

    if (!this.key) {
      console.warn('An input has no identification attribute. Use "name" for input or provide own "key".', input)
      return
    }

    this.retrieveStorage()
    this.setupListeners()
    this.updateDatalist()
  }

  get list () {
    return this.castArray(this.store?.[this.key])
  }

  get options () {
    return this.list
      .slice(0, this.LIST_LENGTH)
      .map(value => `<option value="${value}">${value}</option>`)
      .join('')
  }

  retrieveStorage () {
    const store = storage(this.STORAGE_KEY)
    this.store = this.isValidStore(store) ? store : {}
  }

  onInputChange (e) {
    const value = this.getValueFromEvent(e)
    if (!value) return
    this.addValueToStore(value)
    this.updateDatalist()
  }

  updateDatalist () {
    if (!this.isMobile) return // only for mobile
    this.input.setAttribute('list', this.key)
    this.input.setAttribute('autocomplete', 'on')
    const isDataList = !!this.datalist
    this.datalist = this.datalist || document.createElement('datalist')
    this.datalist.id = this.key
    !isDataList && this.input.after(this.datalist)
    this.datalist.innerHTML = this.options
  }

  addValueToStore (value) {
    this.retrieveStorage()
    const list = this.list.filter(val => val?.trim() !== value?.trim()) // filter same values
    list.unshift(value)
    this.store[this.key] = list.slice(0, this.SAVE_LENGTH)
    storage(this.STORAGE_KEY, this.store)
  }

  setupListeners () {
    this.input.addEventListener('change', this.onInputChange.bind(this))
    this.input.addEventListener('DOMNodeRemoved', () => {
      this.input.removeEventListener('change', this.onInputChange.bind(this))
    }, false)
    this.input.addEventListener('DOMNodeRemovedFromDocument', () => {
      this.input.removeEventListener('change', this.onInputChange.bind(this))
    }, false)
  }

  getValueFromEvent (e) {
    return e?.target?.value ?? ''
  }

  castArray (arr) {
    return Array.isArray(arr) ? arr : []
  }

  isValidStore (store) {
    return typeof store === 'object' && !Array.isArray(store) && store !== null
  }
}
