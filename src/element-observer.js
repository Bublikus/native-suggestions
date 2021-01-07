export default class {
  element = null

  constructor (element) {
    this.element = element
  }

  onChange(callback) {
    this.element.addEventListener('change', callback)
    this.onRemove(() => this.element.removeEventListener('change', callback))
    return this
  }

  onRemove(callback) {
    let observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        mutation.removedNodes.forEach(removed => {
          if (this._isDescendant(this.element, removed)) {
            callback()

            // allow garbage collection
            observer.disconnect()
            observer = undefined
          }
        })
      })
    })
    observer.observe(document, {
      childList: true,
      subtree: true
    })
    return this
  }

  _isDescendant(desc, root) {
    return !!desc && (desc === root || this._isDescendant(desc.parentNode, root))
  }
}
