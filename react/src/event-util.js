
let eventGuid = 0
let todayStr = getTodayStr()

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T12:00:00'
  }
]

export function createEventId() {
  return String(eventGuid++)
}

function getTodayStr() {
  return new Date().toISOString().replace(/T.*$/, '')
}
