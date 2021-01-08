import storage from './storage'
import ElementObserver from './element-observer'

export default class NativeSuggestions {
  config = {
    storageKey: 'native-suggestions',
    folder: 'other',
    inputKey: null,
    listLength: 10,
    saveLength: 10,
    mobileOnly: true,
    inputTypes: ['text', 'number', 'search', 'email', 'tel'],
  }

  store = null
  input = null
  datalist = null

  constructor(input, config) {
    if (!(input instanceof HTMLInputElement)) {
      console.warn('Element must be an input.', input)
      return
    }

    if (!this.config.inputTypes.includes(input.type)) {
      return
    }

    this.init(input, config)

    if (!this.config.inputKey) {
      console.warn('An input has no identification attribute. Use "name" for input or provide own "key".', input)
      return
    }

    this.retrieveStorage()
    this.setupListeners()
    this.updateDatalist()
  }

  get isMobile() {
    return window.innerWidth <= 768
  }

  get list() {
    return this.castArray(this.store?.[this.config.folder]?.[this.config.inputKey])
  }

  get options() {
    return this.list
      .slice(0, this.config.listLength)
      .map(value => `<option value="${value}">${value}</option>`)
      .join('')
  }

  init(input, config = {}) {
    this.input = input

    const newConfig = { ...this.config, ...config }
    newConfig.inputKey = config.inputKey || (input.name && input.name === input.id ? `${input.name}_${input.id}` : input.name)
    newConfig.folder = config.folder || this.config.folder
    this.config = newConfig
  }

  retrieveStorage() {
    const store = storage(this.config.storageKey)
    this.store = this.isObject(store) ? store : {}
  }

  setupListeners() {
    const input = new ElementObserver(this.input)
    input.onChange(this.onInputChange.bind(this))
  }

  onInputChange(e) {
    const value = this.getValueFromEvent(e)
    if (!value) return

    this.addValueToStore(value)
    this.updateDatalist()
  }

  addValueToStore(value) {
    this.retrieveStorage()

    const list = this.list.filter(val => val?.trim() !== value?.trim()) // filter same values
    list.unshift(value)

    this.store[this.config.folder] = this.store[this.config.folder] || {}
    this.store[this.config.folder][this.config.inputKey] = list.slice(0, this.config.saveLength)

    storage(this.config.storageKey, this.store)
  }

  updateDatalist() {
    if (this.config.mobileOnly && !this.isMobile) return

    const id = `${this.config.folder}.${this.config.inputKey}`

    this.input.setAttribute('list', id)
    this.input.setAttribute('autocomplete', 'on')

    const isDataList = !!this.datalist
    this.datalist = this.datalist || document.createElement('datalist')
    this.datalist.id = id
    !isDataList && this.input.after(this.datalist)

    this.datalist.innerHTML = this.options
  }

  getValueFromEvent(e) {
    return e?.target?.value ?? ''
  }

  castArray(arr) {
    return Array.isArray(arr) ? arr : []
  }

  isObject(store) {
    return typeof store === 'object' && !Array.isArray(store) && store !== null
  }
}
