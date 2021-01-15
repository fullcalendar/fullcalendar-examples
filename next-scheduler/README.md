
# FullCalendar Scheduler Next.js Example

Getting FullCalendar Scheduler to work with [Next.js](https://nextjs.org/) requires a bit of configuration. See below.


## Installation

```bash
git clone https://github.com/fullcalendar/fullcalendar-example-projects.git
cd fullcalendar-example-projects/next-scheduler
npm install
```


## Build Commands

```
npm run watch # watch and rebuild while developing
npm run build # build for production
npm run start # run the production build
npm run clean # clear all built files
```


## Workarounds Explained

1. Install [next-transpile-modules](https://www.npmjs.com/package/next-transpile-modules) to process FullCalendar's ES modules. See [next.config.js](next.config.js). If you don't like this, [vote to give Next ESM support for third-party packages](https://github.com/vercel/next.js/issues/706).
2. Configure Babel to ignore imports of CSS files, which FullCalendar uses to include styles. Uses the [babel-plugin-transform-require-ignore](https://www.npmjs.com/package/babel-plugin-transform-require-ignore) plugin. See [babel.config.js](babel.config.js)
3. In [_app.jsx](pages/_app.jsx), include FullCalendar's global stylesheets manually...


## FullCalendar Stylesheets

In environments other than Next.js, FullCalendar is able to include its own stylesheets so that you don't need to worry about it. Next disallows this however, and you inherit the responsibility as a developer. So, try to trace the FullCalendar's dependency tree and include any `main.css` files in each package. For example, if you import these JS modules:

```js
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
```

You'll need to manually import these stylesheets in `_app.jsx`:

```jsx
import '@fullcalendar/common/main.css' // @fullcalendar/react imports @fullcalendar/common
import '@fullcalendar/timeline/main.css' // @fullcalendar/resource-timeline imports @fullcalendar/timeline
import '@fullcalendar/resource-timeline/main.css' // @fullcalendar/resource-timeline is a direct import
// (and @fullcalendar/interaction has no stylesheet)
```

I know, this is really lame. FullCalendar might leverage [CSS Modules](https://css-tricks.com/css-modules-part-1-need/) in the future, and when it does, if Next.js allows support for it, things will magically work and you won't need to bother yourself with importing CSS anymore. [Please vote on the issue](https://github.com/vercel/next.js/issues/13282).
