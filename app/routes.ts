import {Route, RouteDefinition} from 'angular2/router';
import {BurgersComponent} from './burger/burgers.component';
import {BurgerComponent} from './burger/burger.component';
import {MapComponent} from './map/map.component';
import {AboutComponent} from './about/about.component';

export const ROUTE_NAMES = {
  burgers: 'Burgers',
  burger: 'Burger',
  map: 'Map',
  about: 'About'
}

export const ROUTES: RouteDefinition[] = [
  new Route({ path: "/burgers", component: BurgersComponent, name: ROUTE_NAMES.burgers }),
  new Route({ path: "/burgers/:key", component: BurgerComponent, name: ROUTE_NAMES.burger }),
  new Route({ path: "/map", component: MapComponent, name: ROUTE_NAMES.map }),
  new Route({ path: "/about", component: AboutComponent, name: ROUTE_NAMES.about })
];
