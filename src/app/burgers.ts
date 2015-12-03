import {bootstrap, Component, OnInit, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {Burger} from './burger';
import {BurgerService} from './burger.service';

@Component({
  selector: 'burgers',
  providers: [BurgerService],
  template: `
    <ol class="burgers">
      <li *ng-for="#burger of burgers">
        <a href="{{ burger.url }}" target="_blank">{{ burger.name }}</a>
        <img src="img/{{ burger.img }}" class="img-responsive img-rounded"/>
      </li>
    </ol>
    `,
  styles: [`
      .burgers li {
        font-size: 2em;
        margin-bottom: 20px;
      }
      `],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

class BurgersComponent implements OnInit {
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
