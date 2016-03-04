System.register(['angular2/core', './burgers.data'], function(exports_1, context_1) {
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
    var core_1, burgers_data_1;
    var BurgerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (burgers_data_1_1) {
                burgers_data_1 = burgers_data_1_1;
            }],
        execute: function() {
            BurgerService = (function () {
                function BurgerService() {
                }
                BurgerService.prototype.getBurgers = function () {
                    return Promise.resolve(burgers_data_1.BURGERS);
                };
                BurgerService.prototype.getBurger = function (key) {
                    return Promise.resolve(burgers_data_1.BURGERS)
                        .then(function (burgers) { return burgers.filter(function (b) { return b.key === key; })[0]; });
                };
                BurgerService.prototype.getRanking = function (key) {
                    return Promise.resolve(burgers_data_1.BURGERS)
                        .then(function (burgers) { return burgers.map(function (b) { return b.key; }).indexOf(key) + 1; });
                };
                BurgerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], BurgerService);
                return BurgerService;
            }());
            exports_1("BurgerService", BurgerService);
        }
    }
});
//# sourceMappingURL=burger.service.js.map