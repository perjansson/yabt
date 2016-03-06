import {Injectable} from 'angular2/core';
import {BURGERS} from './burgers.data';
import {Burger} from './burger';

@Injectable()
export class BurgerService {
	getBurgers() {
		return Promise.resolve(BURGERS);
	}

	getBurger(key: string) {
    return Promise.resolve(BURGERS)
      .then(burgers => burgers.filter(b => b.key === key)[0]);
	}

	getRanking(key: string) {
		return Promise.resolve(BURGERS)
			.then(burgers => burgers.map(function(b) {return b.key; }).indexOf(key) + 1)
	}
}
