import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Burger} from './burger';
import {BurgerService} from './burger.service';

@Component({
  selector: 'burger-detail',
  styles: [`
    .burger-detail h4 {
      display: inline;
    }
    .burger-detail .row {
      margin-bottom: 15px;
    }
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
  template: `
    <div class="row" *ngIf="burger" class="burger-detail row">
    	<div class="col-xs-offset-1 col-xs-10 col-md-offset-3 col-md-6">
        <div class="row">
          <div class="col-xs-12">
            <header>
      			   <h4>Mmm... sugen på en burgare från {{burger.name}}?</h4>
            </header>
          </div>
        </div>
        <div class="row">
        	<div class="col-xs-12">
            <a href="{{ burger.url }}" target="_blank">Kolla in deras hemsida...</a>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 burger polaroid" [hidden]="burger.key===''" id="{{burger.key}}">
            <p>
              <a href="{{ burger.url }}" target="_blank">{{ ranking + '. ' + burger.name }}</a>
            </p>
            <img src="../img/{{ burger.key + '.jpg' }}" (click)="onSelect(burger)" class="img-responsive" />
          </div>
        </div>
    	</div>
    </div>
  `,
})
export class BurgerDetailComponent implements OnInit {
  public burger: Burger;
  public ranking: number;

  constructor(private burgerService: BurgerService, private routeParams: RouteParams) {
  }

  ngOnInit() {
    if (!this.burger) {
      let key = this.routeParams.get('key');
      this.burgerService.getBurger(key).then(burger => this.burger = burger);
      this.burgerService.getRanking(key).then(ranking => this.ranking = ranking);
    }
  }
}
