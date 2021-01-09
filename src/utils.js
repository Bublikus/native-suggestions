class Utils {
  getValueFromEvent(e) {
    return e?.target?.value ?? ''
  }

  castArray(arr) {
    return Array.isArray(arr) ? arr : []
  }

  isObject(obj) {
    return typeof obj === 'object' && !Array.isArray(obj) && obj !== null
  }
}

export default new Utils()
