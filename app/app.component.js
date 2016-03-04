System.register(['angular2/core', 'angular2/router', './burger/burger.service', './burger/burgers.component', './burger/burger.component', './map/map.component', './about/about.component'], function(exports_1, context_1) {
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
    var core_1, router_1, burger_service_1, burgers_component_1, burger_component_1, map_component_1, about_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (burger_service_1_1) {
                burger_service_1 = burger_service_1_1;
            },
            function (burgers_component_1_1) {
                burgers_component_1 = burgers_component_1_1;
            },
            function (burger_component_1_1) {
                burger_component_1 = burger_component_1_1;
            },
            function (map_component_1_1) {
                map_component_1 = map_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(location) {
                    this.location = location;
                }
                AppComponent.prototype.getLinkStyle = function (path) {
                    //return this.location.path() === path;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [burger_service_1.BurgerService, router_1.ROUTER_PROVIDERS, router_1.Location]
                    }),
                    router_1.RouteConfig([
                        { path: '/burgers', name: 'Burgers', component: burgers_component_1.BurgersComponent, useAsDefault: true },
                        { path: '/burgers/:key', name: 'Burger', component: burger_component_1.BurgerComponent },
                        { path: '/map', name: 'Map', component: map_component_1.MapComponent },
                        { path: '/about', name: 'About', component: about_component_1.AboutComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Location])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map