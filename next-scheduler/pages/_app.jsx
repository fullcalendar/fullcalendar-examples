import React from 'react'

import '@fullcalendar/common/main.css'
import '@fullcalendar/timeline/main.css'
import '@fullcalendar/resource-timeline/main.css'
import '../global-styles.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
