<template>
    <div id="app">
        <FullCalendar v-bind="config" />

        <div class="calendar-actions">
            <button type="button" @click="addDummyEvent">
                Add an example event
            </button>

            <button type="button" @click="removeDummyEvent">
                Remove an event
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar
  },
  computed: {
    ...mapGetters(['events']),

    config () {
      return {
        events: this.events,
        plugins: [dayGridPlugin, interactionPlugin]
      }
    }
  },
  methods: {
    ...mapActions(['addEvent', 'removeEvent']),

    addDummyEvent () {
      const id = this.events.length + 1

      return this.addEvent({
        id: id * 10,
        title: `Event ${id}`,
        start: new Date()
      })
    },

    removeDummyEvent () {
      const lastEventId = this.events[this.events.length - 1] || null

      if (lastEventId === null) {
        return window.alert('No events to remove')
      }

      return this.removeEvent(lastEventId)
    }
  }
}
</script>

<style src="@fullcalendar/core/main.css"></style>
<style src="@fullcalendar/daygrid/main.css"></style>

<style>
    #app {
        font: 16px sans-serif;
    }
</style>

<style scoped>
    .calendar-actions {
        padding: 1em;
        text-align: center;
    }

    .calendar-actions button + button {
        margin-left: 1em;
    }
</style>
