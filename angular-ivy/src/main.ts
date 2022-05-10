
// hack to get demo working in codepen
// https://github.com/codesandbox/codesandbox-client/issues/2634#issuecomment-598104535
import 'core-js/proposals/reflect-metadata';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
