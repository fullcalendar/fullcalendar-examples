import React from 'react'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'

export default () => (
  <FullCalendar
    plugins={[interactionPlugin, timeGridPlugin]}
    initialView='timeGridWeek'
    nowIndicator={true}
    editable={true}
    initialEvents={[
      { title: 'nice event', start: new Date() }
    ]}
  />
)
