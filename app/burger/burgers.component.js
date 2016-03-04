System.register(['angular2/core', 'angular2/common', 'angular2/router', './burger.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, burger_service_1;
    var BurgersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (burger_service_1_1) {
                burger_service_1 = burger_service_1_1;
            }],
        execute: function() {
            BurgersComponent = (function () {
                function BurgersComponent(burgerService, router) {
                    this.burgerService = burgerService;
                    this.router = router;
                }
                BurgersComponent.prototype.getBurgers = function () {
                    var _this = this;
                    this.burgers = [];
                    this.burgerService.getBurgers().then(function (burgers) { return _this.burgers = burgers; });
                    return this.burgers;
                };
                BurgersComponent.prototype.ngOnInit = function () {
                    this.burgers = this.getBurgers();
                };
                BurgersComponent.prototype.onSelect = function (burger) {
                    this.router.navigate(['burger', { key: burger.key }]);
                };
                BurgersComponent = __decorate([
                    core_1.Component({
                        selector: 'burgers',
                        providers: [burger_service_1.BurgerService],
                        templateUrl: 'app/burger/burgers.component.html',
                        styleUrls: ['app/burger/burgers.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [burger_service_1.BurgerService, router_1.Router])
                ], BurgersComponent);
                return BurgersComponent;
            }());
            exports_1("BurgersComponent", BurgersComponent);
        }
    }
});
//# sourceMappingURL=burgers.component.js.map