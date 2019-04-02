import React from 'react'
import FullCalendar from 'sardius-fullcalendar-wrapper'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick

import './main.scss'

export default class DemoApp extends React.Component {

  calendarComponentRef = React.createRef()
  state = {
    calendarWeekends: true,
    calendarEvents: [ // initial event data
      { title: 'Event Now', start: new Date() }
    ]
  }

  toggleWeekends = () => {
    this.setState({ // update a property
      calendarWeekends: !this.state.calendarWeekends
    })
  }

  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current.calendar // TODO: use getApi!!!
    calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
  }

  handleDateClick = (arg) => {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.setState({  // add new event data
        calendarEvents: this.state.calendarEvents.concat({ // creates a new array
          title: 'New Event',
          date: arg.date,
          allDay: arg.allDay
        })
      })
    }
  }

  render() {
    return (
      <div className='demo-app'>
        <div className='demo-app-top'>
          <button onClick={ this.toggleWeekends }>dynamically toggle weekends</button>&nbsp;
          <button onClick={ this.gotoPast }>go to a date in the past</button>&nbsp;
          (also, click a date/time to add an event)
        </div>
        <div className='demo-app-calendar'>
          <FullCalendar
            plugins={[ dayGridPlugin, interactionPlugin ]}
            ref={ this.calendarComponentRef }
            defaultView="dayGridMonth"
            weekends={ this.state.calendarWeekends }
            events={ this.state.calendarEvents }
            dateClick={ this.handleDateClick }
            />
        </div>
      </div>
    )
  }

}
