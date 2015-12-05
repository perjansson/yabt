var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var burger_service_1 = require('./burger.service');
var routes_1 = require('./../routes');
var BurgerComponent = (function () {
    function BurgerComponent(burgerService, routeParams, router) {
        this.burgerService = burgerService;
        this.routeParams = routeParams;
        this.router = router;
    }
    BurgerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.burger) {
            var key = this.routeParams.get('key');
            this.burgerService.getBurger(key).then(function (burger) { return _this.burger = burger; });
        }
    };
    BurgerComponent.prototype.goBackToBurgers = function () {
        this.router.navigate([routes_1.ROUTE_NAMES.burgers]);
    };
    BurgerComponent = __decorate([
        angular2_1.Component({
            selector: 'burger',
            templateUrl: 'app/burger/burger.component.html',
            styleUrls: ['app/burger/burger.component.css'],
        }), 
        __metadata('design:paramtypes', [burger_service_1.BurgerService, router_1.RouteParams, router_1.Router])
    ], BurgerComponent);
    return BurgerComponent;
})();
exports.BurgerComponent = BurgerComponent;
//# sourceMappingURL=burger.component.js.map