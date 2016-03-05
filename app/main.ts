import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, LocationStrategy, APP_BASE_HREF, HashLocationStrategy} from 'angular2/router';
// Add all operators to Observable
import 'rxjs/Rx'

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  provide(APP_BASE_HREF, {useValue : '/' })
]);
