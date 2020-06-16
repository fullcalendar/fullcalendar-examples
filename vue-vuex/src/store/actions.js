import * as Mutation from './mutation-types'

export default {
  addEvent ({ commit }, event) {
    return commit(Mutation.ADD_EVENT, event)
  },
  removeEvent ({ commit }, eventId) {
    return commit(Mutation.REMOVE_EVENT, eventId)
  }
}
