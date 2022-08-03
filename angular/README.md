
# FullCalendar Angular Example Project

This is a fully-buildable example project for FullCalendar and Angular. It was initially set up with the `ng new` command of the [Angular CLI], but with lots of stuff stripped out including testing and linting. For a complete walkthrough, read the [FullCalendar Angular Docs &raquo;](https://fullcalendar.io/docs/angular)

## Installation

```bash
git clone https://github.com/fullcalendar/fullcalendar-example-projects.git
cd fullcalendar-example-projects/angular
npm install
```

## Build commands

```bash
npm run build # build to a directory
npm run start # continously build, as a server
```

After running the `npm run start` command, you will be given a localhost URL that can be visited in a browser.


## Angular Ivy

The `enableIvy` flag has been set to `false` in `tsconfig.base.json` because it is incompatible with FullCalendar's monorepo, which uses Yarn PnP, but if you want to reenable it, please feel free.


[Angular CLI]: https://cli.angular.io/
