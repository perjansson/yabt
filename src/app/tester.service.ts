import {Injectable} from 'angular2/angular2';
import {TESTERS} from './testers.data';
import {Tester} from './tester';

@Injectable()
export class TesterService {
	getTesters() {
		return Promise.resolve(TESTERS);
	}

	getTester(key: string) {
    return Promise.resolve(TESTERS)
      .then(testers => testers.filter(h => h.key === key)[0]);
	}
}
