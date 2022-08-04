
# FullCalendar Angular Example Project

**The techniques decsribed here work with FullCalendar v6-beta ONLY**

The `@fullcalendar/angular` package is **NO LONGER USED** for integration with Angular. Instead,
use the `@fullcalendar/web-component` package.

## Installing this example project

```bash
git clone https://github.com/fullcalendar/fullcalendar-example-projects.git
cd fullcalendar-example-projects/angular
npm install
```

## Building this example project

```bash
npm run build # build to a directory
npm run start # continously build, as a server
```

After running the `npm run start` command, you will be given a localhost URL that can be visited in
a browser.

## Step-by-step technique

Create a new project using the `ng new` command of the [Angular CLI].

In `app.module.ts`, enable the use of Web Components, aka "Custom Elements"
([more info][Angular Web Components]):

```ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  // ...
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
```

Install the FullCalendar-related packages:

```sh
npm install --save \
  @fullcalendar/web-component \
  @fullcalendar/core@beta \
  @fullcalendar/daygrid@beta
```

In `app.component.ts`, import the FullCalendar-related packages and configure FullCalendar's
options:

```ts
import { Component } from '@angular/core';
import { CalendarOptions, defineFullCalendarElement } from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';

// make the <full-calendar> element globally available by calling this function at the top-level
defineFullCalendarElement();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    }
  };

// ...
```

In `app.component.html`, include the correct tags:

```html
<full-calendar [options]='calendarOptions'></full-calendar>
```

[Angular CLI]: https://cli.angular.io/
[Angular Web Components]: https://coryrylan.com/blog/using-web-components-in-angular
