import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BurgerPreviewComponent} from './burger-preview.component';
import {Burger} from './burger';
import {BurgerService} from './burger.service';

@Component({
  selector: 'burger-list',
  providers: [BurgerService],
  template: `
    <div class="row">
      <div class="col-xs-12">
        <burger-preview [burger]="burger" [rank]="i+1" *ngFor="#burger of burgers; #i=index"></burger-preview>
      </div>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES, BurgerPreviewComponent]
})

export class BurgerListComponent implements OnInit {
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
