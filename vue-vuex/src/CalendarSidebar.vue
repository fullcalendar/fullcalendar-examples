<template>
  <div class="calendar-sidebar">
      <section class="instructions">
          <h2>Instructions</h2>

          <ul>
              <li>Select dates and you will be prompted to create a new event</li>
              <li>Drag, drop, and resize events</li>
              <li>Click an event to delete it</li>
          </ul>
      </section>

      <section class="quick-toggles">
          <label>
              <input type="checkbox" v-model="weekendsEnabledCheckbox">
              Toggle weekends
          </label>
      </section>

      <section class="events-list">
          <h2>All Events ({{ events.length }})</h2>

          <ul>
              <li v-for="event in events" :key="event.id">
                  <b>{{ getFormattedDay(event.start) }}</b>
                  <i>{{ getEventDurationType(event) }}</i>
              </li>
          </ul>
      </section>
  </div>
</template>

<script>
import { format } from 'date-fns'

export default {
  props: {
    events: {
      type: Array,
      required: true
    },
    weekendsEnabled: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    weekendsEnabledCheckbox: {
      get () {
        return this.weekendsEnabled
      },
      set (value) {
        return this.$emit('set-weekends-enabled', value)
      }
    }
  },
  methods: {
    getFormattedDay (date) {
      return format(date, 'MMM d, yyyy')
    },
    getEventDurationType (event) {
      const allDay = (event.allDay !== undefined) ? event.allDay : false

      if (allDay) {
        return 'All-day event'
      }

      return 'Timed event'
    }
  }
}
</script>

<style scoped>
    .calendar-sidebar {
        width: 300px;
        line-height: 1.5;
        background: #eaf9ff;
        border-right: 1px solid #d3e2e8;
    }

    .calendar-sidebar ul {
        margin: 0;
        padding: 0 0 0 1.5em;
    }

    .calendar-sidebar ul li {
        margin: 1.5em 0;
        padding: 0;
    }

    .calendar-sidebar section {
        padding: 2em;
    }
</style>
