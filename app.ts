import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {BurgerService} from './burgerservice';

@Component({
  selector: 'burgers',
  viewInjector: [BurgerService]
})
@View({
  template: `
    <ol>
      <li *ng-for="#burger of burgers" class="burger">
        <a href="{{ burger.url }}" target="_blank">{{ burger.name }}</a>
        <img src="img/{{ burger.img }}" class="img-responsive img-rounded"/>
      </li>
    </ol>
  `,
  directives: [NgFor]
})
class DisplayComponent {
  burgers: Array<string>;

  constructor(burgerService : BurgerService) {
    this.burgers = burgerService.burgers;
  }
}

bootstrap(DisplayComponent);
