import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Location} from 'angular2/router';
import {BurgerService} from './burger/burger.service';
import {BurgersComponent} from './burger/burgers.component';
import {BurgerComponent} from './burger/burger.component';
import {MapComponent} from './map/map.component';
import {AboutComponent} from './about/about.component';

@Component({
  selector: 'my-app',
  styles: [`
    nav {
      margin-bottom: 40px;
    }
    nav > .row {
      margin-top: 30px;
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
          <button class="btn btn-primary btn-lg" [class.active]="getLinkStyle('#/burgers')" [routerLink]="['Burgers']">Burgers</button>
          <!--a [class.active]="getLinkStyle('#/map')" [routerLink]="['Map']">Map</a-->
          <button class="btn btn-primary btn-lg"[class.active]="getLinkStyle('#/about')" [routerLink]="['About']">About</button>
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
  { path: '/burgers', name: 'Burgers', component: BurgersComponent, useAsDefault: true },
  { path: '/burgers/:key', name: 'Burger', component: BurgerComponent },
  { path: '/map', name: 'Map', component: MapComponent },
  { path: '/about', name: 'About', component: AboutComponent }
])

export class AppComponent {

  location: Location;

  constructor(location: Location) {
    this.location = location;
  }

  getLinkStyle(path: String) {
    return this.location.path() === path;
  }
}
