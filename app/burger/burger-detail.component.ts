import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {Burger} from './burger';
import {BurgerService} from './burger.service';

@Component({
  selector: 'burger-detail',
  styles: [`
    .burger-detail h4 {
      display: inline;
    }

    .burger-detail .badge {
      font-size: 5em;
      margin-bottom: 20px;
      background-color: #000;
    }

    .burger-detail img {
      margin: 20px 0;
    }

    button {
      margin: 20px 0;
    }
  `],
  template: `
    <div class="row" *ngIf="burger" class="burger-detail row">
    	<div class="col-xs-offset-1 col-xs-10 col-md-offset-3 col-md-6">
    			<span class="badge">{{ranking}}</span>
    	</div>
    	<div class="col-xs-offset-1 col-xs-10 col-md-offset-3 col-md-6">
    		<h4>Mmm... sugen på en burgare från {{burger.name}}?</h4>
    		<a href="{{ burger.url }}" target="_blank">Kolla in deras hemsida...</a>
    	</div>
    	<div class="col-xs-offset-1 col-xs-10 col-md-offset-3 col-md-6">
    		<img src="/img/{{ burger.key + '.jpg' }}" (click)="onSelect(burger)" class="img-responsive img-circle" />
    	</div>
    	<div class="col-xs-offset-1 col-xs-10 col-md-offset-3 col-md-6">
    	</div>
    	<div class="col-xs-offset-1 col-xs-10 col-md-offset-3 col-md-6 hidden">
    		<button (click)="goBackToBurgers()" class="btn btn-default">Tillbaka</button>
    	</div>
    </div>
  `,
})
export class BurgerDetailComponent implements OnInit {
  public burger: Burger;
  public ranking: number;

  constructor(private burgerService: BurgerService, private routeParams: RouteParams, private router: Router) {
  }

  ngOnInit() {
    if (!this.burger) {
      let key = this.routeParams.get('key');
      this.burgerService.getBurger(key).then(burger => this.burger = burger);
      this.burgerService.getRanking(key).then(ranking => this.ranking = ranking);
    }
  }

  goBackToBurgers() {
    this.router.navigate(['burgers']);
  }
}
