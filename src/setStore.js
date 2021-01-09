import storage from './storage'
import utils from './utils'

/**
 * @param {object} values
 * @param {{
 *   storageKey: 'native-suggestions',
 *   folder: 'other'
 * }} config
 */
export default function (values, config = {}) {
  const storageKey = config.storageKey || 'native-suggestions'
  const folder = config.folder || 'other'

  if (!utils.isObject(values)) return

  const store = storage(storageKey) || {}
  store[folder] = { ...store[folder], ...values }

  storage(storageKey, store)
}
