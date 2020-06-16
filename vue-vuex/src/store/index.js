import actions from './actions'
import mutations from './mutations'

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

export default {
  state,
  getters,
  mutations,
  actions
}
