import {Component, OnInit} from 'angular2/angular2';
import {Router, RouteParams} from 'angular2/router';
import {Burger} from './burger';
import {BurgerService} from './burger.service';
import {ROUTE_NAMES} from './../routes';

@Component({
  selector: 'burger',
  templateUrl: 'app/burger/burger.component.html',
  styleUrls: ['app/burger/burger.component.css'],
})
export class BurgerComponent implements OnInit {
  public burger: Burger;

  constructor(private burgerService: BurgerService, private routeParams: RouteParams, private router: Router) {
  }

  ngOnInit() {
    if (!this.burger) {
      let key = this.routeParams.get('key');
      this.burgerService.getBurger(key).then(burger => this.burger = burger);
    }
  }

  goBackToBurgers() {
    this.router.navigate([ROUTE_NAMES.burgers]);
  }
}
