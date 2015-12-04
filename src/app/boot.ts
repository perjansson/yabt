import {bootstrap, provide} from 'angular2/angular2';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {BurgerService} from './burger.service';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  BurgerService,
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
