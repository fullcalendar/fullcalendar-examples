import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import './main.css'

export default class DemoApp extends React.Component {

  calendarComponentRef = React.createRef()
  state = {
    calendarWeekends: true,
    calendarEvents: [ // initial event data
      { title: 'Event Now', start: new Date() }
    ]
  }

  render() {
    return (
      <div className='demo-app'>
        <div className='demo-app-top'>
          <button onClick={this.toggleWeekends}>toggle weekends</button>&nbsp;
          <button onClick={this.gotoPast}>go to a date in the past</button>&nbsp;
          (also, click a date/time to add an event)
        </div>
        <div className='demo-app-calendar'>
          <FullCalendar
            ref={this.calendarComponentRef}
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            editable={true}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            eventContent={(arg) => (
              <>
                <b>{arg.timeText}</b>&nbsp;
                <i>{arg.event.title}</i>
              </>
            )}
            dateClick={this.handleDateClick}
          />
        </div>
      </div>
    )
  }

  toggleWeekends = () => {
    this.setState({ // update a property
      calendarWeekends: !this.state.calendarWeekends
    })
  }

  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current.getApi()
    calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
  }

  handleDateClick = (arg) => {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      let calendarApi = this.calendarComponentRef.current.getApi()
      calendarApi.addEvent({
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay
      })
    }
  }

}
