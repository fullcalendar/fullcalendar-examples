
# FullCalendar 14 Angular Example Project

This is a fully-buildable example project for FullCalendar and Angular. It was initially set up with the `ng new` command of the [Angular CLI], but with lots of stuff stripped out including testing and linting. For a complete walkthrough, read the [FullCalendar Angular Docs &raquo;](https://fullcalendar.io/docs/angular)

## Installation

```bash
git clone https://github.com/fullcalendar/fullcalendar-example-projects.git
cd fullcalendar-example-projects/angular14
npm install
```

## Build commands

```bash
npm run build # build to a directory
npm run start # continously build, as a server
```

After running the `npm run start` command, you will be given a localhost URL that can be visited in a browser.

## Workarounds

Angular 14 [chokes on FullCalendar's CSS statements](https://github.com/fullcalendar/fullcalendar-angular/issues/403).
The next major version of FullCalendar will solve this, however, a workaround is needed in the meantime:

1. Install `@angular-builders/custom-webpack` and use it within every `builder` within `angular.json` ([example](https://github.com/fullcalendar/fullcalendar-example-projects/commit/2377c16f1d6c37eebe5610511a3cf09d9394c3ff))
2. Write a custom webpack configuration and reference it in the `architect.build.options.customWebpackConfig.path` field ([example](https://github.com/fullcalendar/fullcalendar-example-projects/commit/edfb7b13a60b35984ce577e0f1827f72f7101bdf))
3. Install the `null-loader` Webpack plugin and use it to ignore FullCalendar CSS files ([example](https://github.com/fullcalendar/fullcalendar-example-projects/commit/4fe05c7f0e51b32016618d249658ed9516f5f05f))

This techique will ignore all FullCalendar-imported external CSS files.
You do NOT need to manually include any of FullCalendar's CSS files.
The `@fullcalendar/angular` component incorporates FullCalendar's CSS statements automatically.

Separately, Angular may complain about `fast-deep-equal`, saying "CommonJS or AMD dependencies can cause optimization bailouts".
You can silence this warning by adding `fast-deep-equal` to the `allowedCommonJsDependencies` list
([example](https://github.com/fullcalendar/fullcalendar-example-projects/commit/d381af4493a8925df541c4fc6e8f42a431c16e8c)).

[Angular CLI]: https://angular.io/cli
