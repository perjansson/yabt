import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Location} from 'angular2/router';
import {BurgerService} from './burger/burger.service';
import {BurgersComponent} from './burger/burgers.component';
import {BurgerComponent} from './burger/burger.component';
import {MapComponent} from './map/map.component';
import {AboutComponent} from './about/about.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
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
