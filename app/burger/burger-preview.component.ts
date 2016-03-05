import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Burger} from './burger';

@Component({
  selector: 'burger-preview',
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
  template: `
    <div class="burger polaroid col-xs-offset-1 col-xs-10 col-md-offset-3 col-md-6" [hidden]="burger.key===''" id="{{burger.key}}">
      <p>
        <a href="{{ burger.url }}" target="_blank">{{ rank + '. ' + burger.name }}</a>
      </p>
      <img src="/img/{{ burger.key + '.jpg' }}" [routerLink]="['Burger', { key: burger.key }]" class="img-responsive" />
    </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class BurgerPreviewComponent {
  @Input() burger: Burger;
  @Input() rank: Number;
}
