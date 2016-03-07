import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Tester} from './tester';
import {TesterService} from './tester.service';

@Component({
  selector: 'about',
  providers: [TesterService],
  styles: [`
    .intro {
      margin-bottom: 40px;
    }

    .testers {
      margin-bottom: 20px;
    }

    .testers > div {
      display: block;
    }
  `],
  template: `
    <div class="row">
      <div class="col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8">
        <h4>About</h4>
        <p class="intro">
          We live and work in Stockholm, Sweden. We are software developers. We love hamburgers. We love it so much we decided to try and find the best lunch hamburger in town. We have a pretty simple criteria for which hamburgers to try and we have an even simpler way to rank the hamburgers? So, if you’re ever in Stockholm and in the mood for a hamburger look no further. Here’s the current standings of the awesome hamburgers we’ve tried:
        </p>

        <h4>How did we rank the burgers?</h4>
        <p class="intro">
          We use 👍 (thumb up) or 👎 (thumb down) to vote if we believe the hamburger we just ate is better or worse then the hamburger located last in the standings. Each hamburger will start last and work it’s way up by getting two or more thumbs up. It’s a majority decision by the three of us, so as long as the hamburger gets two or more thumbs up it will keep climbing. When the hamburger gets two or more thumbs down it means we’ve found its position in the standings.
        </p>

        <h4>What is the criteria to be in the competition?</h4>
        <p class="intro">
          The restaurant, which preferably shouldn’t be a big chain, has to serve hamburgers at lunch time on workdays in Stockholm (including its immediate surroundings).
        </p>

        <h4>Who are we?</h4>
        <p>
          Three software developers that love to code and eat burgers.
        </p>
        <div class="col-sm-12 testers">
          <div *ngFor="#tester of testers" [hidden]="tester.key===''" id="{{tester.key}}">
            <a href="{{ tester.url }}" target="_blank">{{ tester.name }}</a>
          </div>
        </div>
      </div>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class AboutComponent implements OnInit {
  public testers: Tester[];

  constructor(private testerService: TesterService) { }

  getTesters() {
    this.testers = [];
    this.testerService.getTesters().then(testers => this.testers = testers);
    return this.testers;
  }

  ngOnInit() {
    this.testers = this.getTesters();
  }
}
