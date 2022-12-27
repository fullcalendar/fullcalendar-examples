
# FullCalendar Next.js Example

Getting FullCalendar to work with [Next.js](https://nextjs.org/) requires a bit of configuration. See below.


## Installation

```bash
git clone https://github.com/fullcalendar/fullcalendar-examples.git
cd fullcalendar-examples/next
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

### Next.JS 13.1
All features of next-transpile-modules are now natively built-in Next.js 13.1.

## 12.3.2 and earlier
Install [next-transpile-modules](https://www.npmjs.com/package/next-transpile-modules) to process FullCalendar's ES modules. See [next.config.js](next.config.js). 
