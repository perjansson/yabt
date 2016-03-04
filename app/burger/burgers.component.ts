import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Burger} from './burger';
import {BurgerService} from './burger.service';

@Component({
  selector: 'burgers',
  providers: [BurgerService],
  template: `
    <div class="row burgers">
        <div *ngFor="#burger of burgers; #i=index" class="burger polaroid col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8" [hidden]="burger.key===''" id="{{burger.key}}">
          <p>
            <a href="{{ burger.url }}" target="_blank">{{ i+1 + '. ' + burger.name }}</a>
          </p>
          <img src="img/{{ burger.key + '.jpg' }}" [routerLink]="['Burger', { key: burger.key }]" class="img-responsive" />
        </div>
    </div>
  `,
  styles: [`
    .burger {
      margin-bottom: 40px;
    }
    .polaroid {
      position: relative;
    }
    .polaroid img {
      cursor: pointer;
      border: 10px solid #fff;
      border-bottom: 70px solid #fff;
      -webkit-box-shadow: 8px 8px 8px #888;
      -moz-box-shadow: 8px 8px 8px #888;
      box-shadow: 8px 8px 8px #888;
    }
    .polaroid p {
      position: absolute;
      text-align: center;
      margin-left: 30px;
      margin-bottom: 20px;
      bottom: 0px;
      font: 400 18px/1 'Inconsolata', cursive;
      color: #000;
    }
    .polaroid p a {
      font-size: 1.2em;
    }

    @media only screen and (min-width : 768px) {

      .polaroid p a {
        font-size: 1.5em;
      }

    }
    `],
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
