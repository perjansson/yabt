import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Burger} from './../burger/burger';
import {BurgerService} from './../burger/burger.service';

@Component({
  selector: 'map',
  providers: [BurgerService],
  template: `
    <div class="alert alert-info" role="alert"> <strong>Hold on!</strong> Unfortunately I haven't had time to build the map component yet. </div>
  `,
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class MapComponent implements OnInit {
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
