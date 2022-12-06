
# FullCalendar 15 Angular Example Project

This is a fully-buildable example project for FullCalendar and Angular. It was initially set up with the `ng new` command of the [Angular CLI], but with lots of stuff stripped out including testing and linting. For a complete walkthrough, read the [FullCalendar Angular Docs &raquo;](https://fullcalendar.io/docs/angular)

## Installation

```bash
git clone https://github.com/fullcalendar/fullcalendar-example-projects.git
cd fullcalendar-example-projects/angular15
npm install
```

## Build commands

```bash
npm run build # build to a directory
npm run start # continously build, as a server
```

After running the `npm run start` command, you will be given a localhost URL that can be visited in a browser.

## Quirks

This example has `"preserveSymlinks": true` in `angular.json`, but this is only needed within a monorepo.

[Angular CLI]: https://angular.io/cli
