import * as Mutation from './mutation-types'

export default {
  createEvent ({ commit }, event) {
    return commit(Mutation.CREATE_EVENT, event)
  },
  updateEvent ({ commit }, updatedEvent) {
    return commit(Mutation.UPDATE_EVENT, updatedEvent)
  },
  deleteEvent ({ commit }, eventId) {
    return commit(Mutation.DELETE_EVENT, eventId)
  },
  setWeekendsEnabled ({ commit }, enabled) {
    return commit(Mutation.SET_WEEKENDS_ENABLED, enabled)
  }
}
