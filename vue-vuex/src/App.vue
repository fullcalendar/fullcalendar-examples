<template>
  <div id="app">
    <FullCalendar />
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'

export default {
  components: {
    FullCalendar
  }
}
</script>

<style>
    #app {
          font: 14px sans-serif;
    }
</style>
