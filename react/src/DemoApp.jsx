import React, { createRef } from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-util'

export default class DemoApp extends React.Component {

  calendarRef = createRef()
  state = {
    weekendsVisible: true,
    currentEvents: []
  }

  render() {
    let { state } = this

    return (
      <div className='demo-app'>
        <div className='demo-app-top'>
          <label>
            <input
              type='checkbox'
              checked={state.weekendsVisible}
              onChange={this.handleWeekendsToggle}
            ></input>
            toggle weekends
          </label>
        </div>
        <div className='demo-app-main'>
          <div className='demo-app-calendar'>
            <FullCalendar
              ref={this.calendarRef}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
              }}
              initialView='dayGridMonth'
              initialEvents={INITIAL_EVENTS}
              editable={true}
              weekends={state.weekendsVisible}
              selectable={true}
              selectMirror={true}
              select={this.handleDateSelect}
              eventContent={renderEventContent}
              eventClick={this.handleEventClick}
              eventsSet={this.handleEvents}
            />
          </div>
          <div className='demo-app-sidebar'>
            <h2>Event List</h2>
            <ul>
              {state.currentEvents.map(renderSidebarEvent)}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = this.calendarRef.current.getApi()

    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  handleEventClick = (clickInfo) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b> -
      <i>{event.title}</i>
    </li>
  )
}
