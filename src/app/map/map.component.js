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
var burger_service_1 = require('./../burger/burger.service');
var MapComponent = (function () {
    function MapComponent(burgerService) {
        this.burgerService = burgerService;
    }
    MapComponent.prototype.getBurgers = function () {
        var _this = this;
        this.burgers = [];
        this.burgerService.getBurgers().then(function (burgers) { return _this.burgers = burgers; });
        return this.burgers;
    };
    MapComponent.prototype.ngOnInit = function () {
        this.burgers = this.getBurgers();
    };
    MapComponent = __decorate([
        angular2_1.Component({
            selector: 'map',
            providers: [burger_service_1.BurgerService],
            templateUrl: 'app/map.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [burger_service_1.BurgerService])
    ], MapComponent);
    return MapComponent;
})();
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map