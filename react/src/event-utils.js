
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Teste',
    start: todayStr + 'T12:00:00'
  },
  {
    id: createEventId(),
    title: 'Teste',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Teste',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Teste',
    start: todayStr
  }
]

export function createEventId() {
  return String(eventGuid++)
}
