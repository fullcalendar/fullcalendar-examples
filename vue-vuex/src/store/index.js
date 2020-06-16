import actions from './actions'
import mutations from './mutations'

import { addDays } from 'date-fns'

const state = {
  events: [
    { id: 10, title: 'Event 1', start: new Date() },
    { id: 20, title: 'Event 2', start: addDays(new Date(), 1) },
    { id: 30, title: 'Event 3', start: addDays(new Date(), 2) }
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
