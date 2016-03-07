/// <reference path="../typings/bootstrap/bootstrap.d.ts" />

import {bootstrap} from 'angular2/platform/browser';
import {provide, Component} from 'angular2/core';
import {Router, LocationStrategy, APP_BASE_HREF, HashLocationStrategy, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Location} from 'angular2/router';
import {BurgerService} from './burger/burger.service';
import {BurgerListComponent} from './burger/burger-list.component';
import {BurgerDetailComponent} from './burger/burger-detail.component';
import {MapComponent} from './map/map.component';
import {AboutComponent} from './about/about.component';

@Component({
  selector: 'burger-app',
  styles: [`
    nav {
      margin-bottom: 40px;
    }
    nav > .row {
      margin-top: 30px;
    }
    nav button {
      margin: 0px 5px;
    }
    nav button.router-link-active {
      background-color: #286090;
      border-color: #204d74;
    }
    main {
      margin-top: 30px;
    }
  `],
  template: `
    <nav>
      <div class="row">
        <div class="col-xs-12 text-center">
          <button class="btn btn-primary btn-lg" [class.active]="getLinkStyle('#/burgers')" [routerLink]="['Burgers']"><i class="fa fa-bars"></i> Burgers</button>
          <button class="btn btn-primary btn-lg" data-toggle="tooltip" data-placement="bottom" title="This has not been built yet..." [class.active]="getLinkStyle('#/map')" [routerLink]="['Map']"><i class="fa fa-location-arrow"></i> Map</button>
          <button class="btn btn-primary btn-lg" [class.active]="getLinkStyle('#/about')" [routerLink]="['About']"><i class="fa fa-users"></i> About</button>
        </div>
      </div>
    </nav>
    <main>
      <div class="row">
        <div class="col-xs-12">
          <router-outlet></router-outlet>
        </div>
      </div>
    </main>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [BurgerService, ROUTER_PROVIDERS, Location]
})

@RouteConfig([
  { path: '/burgers', name: 'Burgers', component: BurgerListComponent },
  { path: '/burgers/:key', name: 'Burger', component: BurgerDetailComponent },
  { path: '/map', name: 'Map', component: MapComponent },
  { path: '/about', name: 'About', component: AboutComponent }
])

export class AppComponent {

  constructor(private router: Router, private location: Location) {
    this.router.navigate(['Burgers']);
  }

  ngAfterViewInit(){
    $('[data-toggle="tooltip"]').tooltip();
  }

  getLinkStyle(path: String) {
    return this.location.path() === path;
  }
}

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
