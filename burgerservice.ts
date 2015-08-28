export class BurgerService {
  burgers: Array<string>;
  constructor() {
    this.burgers = [
      {name: "Lilys", url: "http://lilysburger.com", img: "lilys.jpg"},
      {name: "Frick & Hagberg", url: "http://frickochhagberg.se", img: "frick_hagberg.jpg"},
      {name: "Barrels", url: "http://barrels.se", img: "barrels.jpg"}];
  }
}
