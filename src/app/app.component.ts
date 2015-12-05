import {Component} from 'angular2/angular2';
import {RouteConfig, Location, ROUTER_DIRECTIVES} from 'angular2/router';
import {ROUTE_NAMES, ROUTES} from './routes';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig(ROUTES)

export class AppComponent {

  routes = ROUTE_NAMES;
  location: Location;

  constructor(location: Location) {
        this.location = location;
    }

  getLinkStyle(path) {
        return this.location.path() === path;
    }
}
