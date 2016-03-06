import {Component, EventEmitter, Input, Output} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Burger} from './burger';

@Component({
  selector: 'burger-preview',
  styles: [`
    .burger {
      padding: 0;
      position: relative;
      height: 225px;
      overflow: hidden;
      border: 10px solid #fff;
      -webkit-box-shadow: 8px 8px 8px #888;
      -moz-box-shadow: 8px 8px 8px #888;
      box-shadow: 8px 8px 8px #888;
    }
    .burger img {
      cursor: pointer;
    }
    .burger p {
      position: absolute;
      margin-left: 20px;
      top: 20px;
      font: 400 18px/1 'Inconsolata', cursive;
      color: #000;
    }
    .burger p a {
      font-size: 1.2em;
      color: #fff;
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #333, 0 0 70px #333, 0 0 80px #333, 0 0 100px #333, 0 0 150px #333;
    }

    @media only screen and (min-width : 768px) {

      .polaroid p a {
        font-size: 1.9em;
      }

    }
  `],
  template: `
    <div class="burger polaroid col-xs-offset-1 col-xs-10 col-md-offset-3 col-md-6" [hidden]="burger.key===''" id="{{burger.key}}">
      <p>
        <a href="{{ burger.url }}" target="_blank">{{ rank + '. ' + burger.name }}</a>
      </p>
      <img src="img/{{ burger.key + '.jpg' }}" (click)=burgerClick(burger) class="img-responsive" />
    </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class BurgerPreviewComponent {
  @Input() burger: Burger;
  @Input() rank: Number;
  @Output() selected = new EventEmitter<Burger>();

  burgerClick(burger: Burger) {
    this.selected.emit(burger);
  }
}
