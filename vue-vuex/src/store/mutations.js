import * as Mutation from './mutation-types'

export default {
  [Mutation.ADD_EVENT] (state, event) {
    return state.events.push(event)
  },
  [Mutation.REMOVE_EVENT] (state, eventId) {
    const index = state.events.findIndex(event => event.id === eventId)
    
    return state.events.splice(index, 1)
  }
}
