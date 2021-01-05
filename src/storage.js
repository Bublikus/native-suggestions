export function setItem (key, value) {
  if (typeof value === 'object') {
    localStorage.setItem(key, JSON.stringify(value))
  } else {
    localStorage.setItem(key, value)
  }
}

export function getItem (key) {
  const value = localStorage.getItem(key)
  try {
    return JSON.parse(value)
  } catch (e) {
    return value
  }
}

export function removeItem (key) {
  localStorage.removeItem(key)
}

export default function (key, value) {
  if (typeof key === 'undefined') {
    const all = {}
    for (let k of Object.keys(localStorage)) {
      all[k] = getItem(k)
    }
    return all
  }
  if (typeof value === 'undefined') {
    return getItem(key)
  }
  setItem(key, value)
  return value
}
