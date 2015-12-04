import {bootstrap, Component, OnInit, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ROUTE_NAMES, ROUTES} from './routes';
import {Burger} from './burger';
import {BurgerService} from './burger.service';

@Component({
  selector: 'burgers',
  providers: [BurgerService],
  templateUrl: 'app/burgers.component.html',
  styleUrls: ['app/burgers.component.css'],
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class BurgersComponent implements OnInit {
  public burgers: Burger[];

  constructor(private burgerService: BurgerService) { }

  getBurgers() {
    this.burgers = [];
    this.burgerService.getBurgers().then(burgers => this.burgers = burgers);
    return this.burgers;
  }

  ngOnInit() {
    this.burgers = this.getBurgers();
  }
}

bootstrap(BurgersComponent);
