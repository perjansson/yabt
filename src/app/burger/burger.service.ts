import {Injectable} from 'angular2/angular2';
import {BURGERS} from './burgers.data';
import {Burger} from './burger';

@Injectable()
export class BurgerService {
	getBurgers() {
		return Promise.resolve(BURGERS);
	}

	getBurger(key: string) {
    return Promise.resolve(BURGERS)
      .then(burgers => burgers.filter(h => h.key === key)[0]);
	}
}
