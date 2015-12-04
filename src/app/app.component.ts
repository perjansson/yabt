import {Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ROUTE_NAMES, ROUTES} from './routes';

@Component({
  selector: 'my-app',
  template: `
    <nav>
      <div class="row">
        <div class="col-xs-12 text-center">
          <a [router-link]="[routes.burgers]">Burgers</a>
          <a [router-link]="[routes.map]">Map</a>
        </div>
      </div>
    </nav>
    <main>
      <div class="row">
        <div class="col-xs-offset-1 col-xs-10 col-lg-offset-2 col-lg-8">
          <router-outlet></router-outlet>
        </div>
      </div>
    </main>
  `,
  styles: [`
    nav a {
      padding: 10px 20px;
    }
    nav a:hover {
      background: #777;
      text-decoration: none;
      color: #fff;
    }
  `],
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig(ROUTES)

export class AppComponent {
  public routes = ROUTE_NAMES;
}
