import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Burger} from './burger';
import {BurgerService} from './burger.service';

@Component({
  selector: 'burgers',
  providers: [BurgerService],
  templateUrl: 'app/burger/burgers.component.html',
  styleUrls: ['app/burger/burgers.component.css'],
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class BurgersComponent implements OnInit {
  public burgers: Burger[];

  constructor(private burgerService: BurgerService, private router: Router) { }

  getBurgers() {
    this.burgers = [];
    this.burgerService.getBurgers().then(burgers => this.burgers = burgers);
    return this.burgers;
  }

  ngOnInit() {
    this.burgers = this.getBurgers();
  }

  onSelect(burger: Burger) {
    this.router.navigate(['burger', { key: burger.key }]);
  }
}
