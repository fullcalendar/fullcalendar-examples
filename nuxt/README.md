
# FullCalendar Nuxt Example

Getting FullCalendar to work with [Nuxt](https://nuxtjs.org/) requires a bit of configuration. See below.


## Installation

```bash
git clone https://github.com/fullcalendar/fullcalendar-example-projects.git
cd fullcalendar-example-projects/nuxt
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

FullCalendar only ships with ES modules, and Nuxt does not seem to support that, so you must configure Nuxt to transpile FullCalendar's packages. See [nuxt.config.js](nuxt.config.js).
