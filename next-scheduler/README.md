
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
npm run dev # watch and rebuild while developing
npm run build # build for production
npm run start # run the production build
npm run lint # lint source files
```


## Workarounds Explained

Still needed?

Install [next-transpile-modules](https://www.npmjs.com/package/next-transpile-modules) to process FullCalendar's ES modules. See [next.config.js](next.config.js). If you don't like this, [vote to give Next ESM support for third-party packages](https://github.com/vercel/next.js/issues/706).
