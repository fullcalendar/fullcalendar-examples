import * as Mutation from './mutation-types'

const state = {
  events: [
    { id: 10, title: 'Event 1', start: new Date() },
    { id: 20, title: 'Event 2', start: new Date() },
    { id: 30, title: 'Event 3', start: new Date() }
  ]
}

const getters = {
  events: state => state.events
}

const mutations = {
  [Mutation.ADD_EVENT] (state, event) {
    return state.events.push(event)
  },
  [Mutation.REMOVE_EVENT] (state, eventId) {
    const index = state.events.findIndex(event => event.id === eventId)
    
    return state.events.splice(index, 1)
  }
}

const actions = {
  addEvent ({ commit }, event) {
    return commit(Mutation.ADD_EVENT, event)
  },
  removeEvent ({ commit }, eventId) {
    return commit(Mutation.REMOVE_EVENT, eventId)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
