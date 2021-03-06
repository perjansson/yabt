System.register(['angular2/core', 'angular2/common', 'angular2/router', './../burger/burger.service'], function(exports_1, context_1) {
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
    var MapComponent;
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
            MapComponent = (function () {
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
                    core_1.Component({
                        selector: 'map',
                        providers: [burger_service_1.BurgerService],
                        template: "\n    <div class=\"row\">\n      <div class=\"col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8\">\n        <div class=\"alert alert-info\" role=\"alert\"> <strong>Hold on!</strong> Unfortunately I haven't had time to build the map component yet. </div>\n      </div>\n    </div>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [burger_service_1.BurgerService])
                ], MapComponent);
                return MapComponent;
            }());
            exports_1("MapComponent", MapComponent);
        }
    }
});
//# sourceMappingURL=map.component.js.map