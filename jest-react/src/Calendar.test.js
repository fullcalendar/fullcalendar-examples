import React from 'react'
import { render } from '@testing-library/react'
import Calendar from './Calendar'

test('renders the events', () => {
  const { container } = render(<Calendar initialView='timeGridDay' />)

  expect(
    container.querySelector('.fc-view')
  ).toBeInTheDocument()

  expect(
    container.querySelectorAll('.fc-timegrid-event').length,
  ).toBeGreaterThan(0)
})
