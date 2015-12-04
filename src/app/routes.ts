import {Route, RouteDefinition} from 'angular2/router';
import {BurgersComponent} from './burgers.component';

export const ROUTE_NAMES = {
  burgers: 'Burgers',
  map: 'Map'
}

export const ROUTES: RouteDefinition[] = [
  new Route({ path: "/burgers", component: BurgersComponent, name: ROUTE_NAMES.burgers }),
  new Route({ path: "/map", component: BurgersComponent, name: ROUTE_NAMES.map })
];
