import * as React from 'react'
import { render } from 'react-dom'
import DemoApp from './DemoApp'

document.addEventListener('DOMContentLoaded', function() {
  render(<DemoApp />, document.getElementById('root'))
})
