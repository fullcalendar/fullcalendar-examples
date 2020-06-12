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
              initialView='dayGridMonth'
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
              }}
              editable={true}
              weekends={props.weekendsEnabled}
              datesDidUpdate={this.handleVisibleRange}
              selectable={true}
              selectMirror={true}
              select={this.handleDateSelect}
              events={props.events}
              eventDrop={this.handleEventChange}
              eventResize={this.handleEventChange}
              eventContent={renderEventContent}
              eventClick={this.handleEventClick}
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

  handleVisibleRange = (rangeInfo) => {
    this.props.requestEvents(rangeInfo.startStr, rangeInfo.endStr)
      .catch(reportNetworkError)
  }

  handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')

    this.calendarRef.current.getApi().unselect()

    if (title) {
      this.props.createEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      }).catch(reportNetworkError)
    }
  }

  handleEventChange = (changeInfo) => {
    this.props.updateEvent(changeInfo.event.toPlainObject())
      .catch(() => {
        reportNetworkError()
        changeInfo.revert()
      })
  }

  handleEventClick = (clickInfo) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      this.props.deleteEvent(clickInfo.event.id)
        .catch(reportNetworkError)
    }
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
