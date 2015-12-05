import {bootstrap, Component, OnInit, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ROUTE_NAMES, ROUTES} from './routes';
import {Tester} from './tester';
import {TesterService} from './tester.service';

@Component({
  selector: 'about',
  providers: [TesterService],
  templateUrl: 'app/about.component.html',
  styleUrls: ['app/about.component.css'],
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
