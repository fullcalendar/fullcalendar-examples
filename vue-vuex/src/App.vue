<template>
    <div id="app">
        <calendar-sidebar
            :events="events"
            :weekends-enabled="weekendsEnabled"
            @set-weekends-enabled="setWeekendsEnabled"
        />

        <full-calendar
            class="full-calendar"
            :options="config"
        />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { addDays } from 'date-fns'

import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

import CalendarSidebar from './CalendarSidebar.vue'

export default {
  components: {
    FullCalendar,
    CalendarSidebar
  },
  computed: {
    ...mapGetters(['events', 'weekendsEnabled']),

    config () {
      return {
        events: this.events,
        weekends: this.weekendsEnabled,
        plugins: [dayGridPlugin, interactionPlugin]
      }
    }
  },
  methods: {
    ...mapActions([
      'createEvent',
      'updateEvent',
      'deleteEvent',
      'setWeekendsEnabled'
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

<style>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100vh;
    }
</style>

<style scoped>
    #app {
        font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
        font-size: 14px;

        display: flex;
        overflow: hidden;
        height: 100%;
    }

    .full-calendar {
        flex: 1;
    }
</style>
