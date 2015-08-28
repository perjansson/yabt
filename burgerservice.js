var BurgerService = (function () {
    function BurgerService() {
        this.burgers = [
            { name: "Lilys", url: "http://lilysburger.com", img: "lilys.jpg" },
            { name: "Frick & Hagberg", url: "http://frickochhagberg.se", img: "frick_hagberg.jpg" },
            { name: "Barrels", url: "http://barrels.se", img: "barrels.jpg" }];
    }
    return BurgerService;
})();
exports.BurgerService = BurgerService;
