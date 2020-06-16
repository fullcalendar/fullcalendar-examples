import * as Mutation from './mutation-types'

export default {
  [Mutation.CREATE_EVENT] (state, event) {
    return state.events.push(event)
  },
  [Mutation.UPDATE_EVENT] (state, updatedEvent) {
    const index = state.events.findIndex(event => event.id === updatedEvent.id)
    
    return state.events.splice(index, 1, updatedEvent)
  },
  [Mutation.DELETE_EVENT] (state, eventId) {
    const index = state.events.findIndex(event => event.id === eventId)
    
    return state.events.splice(index, 1)
  }
}
