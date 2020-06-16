<template>
    <div id="app">
        <FullCalendar v-bind="config" />

        <div class="calendar-actions">
            <button type="button" @click="createDummyEvent">
                Add an example event
            </button>

            <button type="button" @click="updateLastEvent">
                Update the last event
            </button>

            <button type="button" @click="deleteLastEvent">
                Remove the last event
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { addDays } from 'date-fns'

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
    ...mapActions([
      'createEvent',
      'updateEvent',
      'deleteEvent'
    ]),

    createDummyEvent () {
      const id = this.events.length + 1

      return this.createEvent({
        id: id * 10,
        title: `Event ${id}`,
        start: addDays(new Date(), this.events.length)
      })
    },

    updateLastEvent () {
      const lastEvent = this.events[this.events.length - 1] || null

      if (lastEvent === null) {
        return window.alert('No events to update')
      }

      const updatedEvent = {
        ...lastEvent,
        title: `${lastEvent.title} (updated!)`
      }

      return this.updateEvent(updatedEvent)
    },

    deleteLastEvent () {
      const lastEvent = this.events[this.events.length - 1] || null

      if (lastEvent === null) {
        return window.alert('No events to delete')
      }

      return this.deleteEvent(lastEvent.id)
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
