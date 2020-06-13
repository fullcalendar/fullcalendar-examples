import React, { createRef } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import actionCreators from './actions'
import { getHashValues } from './utils'

class DemoApp extends React.Component {

  calendarRef = createRef()

  render() {
    let { props } = this

    return (
      <div className='demo-app'>
        <div className='demo-app-top'>
          <label>
            <input
              type='checkbox'
              checked={props.weekendsEnabled}
              onChange={props.toggleWeekends}
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
              editable={true}
              weekends={props.weekendsEnabled}
              datesSet={this.handleDates}
              selectable={true}
              selectMirror={true}
              select={this.handleDateSelect}
              events={props.events}
              eventContent={renderEventContent}
              eventClick={this.handleEventClick}
              eventAdd={this.handleEventAdd}
              eventChange={this.handleEventChange}
              eventRemove={this.handleEventRemove}
            />
          </div>
          <div className='demo-app-sidebar'>
            <h2>Event List</h2>
            <ul>
              {props.events.map(renderSidebarEvent)}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  handleDateSelect = (selectInfo) => {
    let calendarApi = this.calendarRef.current.getApi()
    let title = prompt('Please enter a new title for your event')

    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      }, true) // temporary=true, will get overwritten when reducer gives new events
    }
  }

  handleEventClick = (clickInfo) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  handleDates = (rangeInfo) => {
    this.props.requestEvents(rangeInfo.startStr, rangeInfo.endStr)
      .catch(reportNetworkError)
  }

  handleEventAdd = (addInfo) => {
    this.props.createEvent(addInfo.event.toPlainObject())
      .catch(() => {
        reportNetworkError()
        addInfo.revert()
      })
  }

  handleEventChange = (changeInfo) => {
    this.props.updateEvent(changeInfo.event.toPlainObject())
      .catch(() => {
        reportNetworkError()
        changeInfo.revert()
      })
  }

  handleEventRemove = (removeInfo) => {
    this.props.deleteEvent(removeInfo.event.id)
      .catch(() => {
        reportNetworkError()
        removeInfo.revert()
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

function renderSidebarEvent(plainEventObject) {
  return (
    <li key={plainEventObject.id}>
      <b>{plainEventObject.start}</b> -
      <i>{plainEventObject.title}</i>
    </li>
  )
}

function reportNetworkError() {
  alert('This action could not be completed')
}

function mapStateToProps() {
  const getEventArray = createSelector(
    (state) => state.eventsById,
    getHashValues
  )

  return (state) => {
    return {
      events: getEventArray(state),
      weekendsEnabled: state.weekendsEnabled
    }
  }
}

export default connect(mapStateToProps, actionCreators)(DemoApp)
