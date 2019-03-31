import React from 'react'
import FullCalendar from 'sardius-fullcalendar-wrapper'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'

import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'

const today = new Date()
const tomorrow = new Date()

export default class DemoApp extends React.Component {
  constructor(props) {
    super(props)
    // Create a reference to the component to use Full Calendar methods
    this.calendarApiRef = React.createRef()
    this.state = {
      events: [
        {
          title: 'Example Event',
          start: today
        },
        {
          title: 'Example Event',
          start: tomorrow.setDate(today.getDate() + 1)
        }
      ]
    }
  }

  eventClicked = (eventClickInfo) => {
    alert('Event has been clicked!')
  }

  getView = () => {
    // Use reference to call Full Calendar Methods
    const view = this.calendarApiRef.current.calendar.getView()
    alert('We are using FullCalendar Methods!')
  }

  selectEvent = (selectionInfo) => {
    alert('Event Selected!')
  }

  render() {
    return (
      <FullCalendar
        ref={this.calendarApiRef}
        nowIndicator
        header={{
          left: 'prev,today,next',
          center: 'title',
          right: 'dayGridMonth, dayGridWeek, dayGridDay'
        }}
        navLinks
        events={this.state.events}
        select={selectionInfo => {
          this.selectEvent(selectionInfo)
        }}
        // Another example of a callback / handler function
        eventClick={eventClickInfo => {
          this.eventClicked(eventClickInfo)
        }}
        plugins={[
          interactionPlugin,
          dayGridPlugin
        ]}
        editable
        selectable
        snapDuration="00:05"
        allDaySlot={false}
        defaultView="dayGridMonth"
      />
    )
  }
}
