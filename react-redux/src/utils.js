
export function getHashValues(hash) {
  return Object.values(hash)
}

export function hashById(a) {
  let hash = {}

  for (let item of a) {
    hash[item.id] = item
  }

  return hash
}

export function excludeById(a, id) {
  return a.filter((item) => item.id !== id)
}

export function getTodayStr() {
  return new Date().toISOString().replace(/T.*$/, '')
}
