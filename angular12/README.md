
# FullCalendar Angular 12 Example Project

This is a fully-buildable example project for FullCalendar and Angular. It was initially set up with the `ng new` command of the [Angular CLI], but with lots of stuff stripped out including testing and linting. For a complete walkthrough, read the [FullCalendar Angular Docs &raquo;](https://fullcalendar.io/docs/angular)

## Installation

```bash
git clone https://github.com/fullcalendar/fullcalendar-example-projects.git
cd fullcalendar-example-projects/angular12
npm install
```

## Build commands

```bash
npm run build # build to a directory
npm run start # continously build, as a server
```

After running the `npm run start` command, you will be given a localhost URL that can be visited in a browser.

## Monorepo Quirk

To get this example working within a monorepo, the following hacks were necessary:

- In `package.json`, add `"preact": "^10.0.5"`
- In `angular.json`, add `"preserveSymlinks": true` in two places

These hacks can be safely removed if you're not using a monorepo.

[Angular CLI]: https://angular.io/cli
