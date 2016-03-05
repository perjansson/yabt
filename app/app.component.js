System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', './burger/burger.service', './burger/burger-list.component', './burger/burger-detail.component', './map/map.component', './about/about.component'], function(exports_1, context_1) {
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
    var browser_1, core_1, router_1, burger_service_1, burger_list_component_1, burger_detail_component_1, map_component_1, about_component_1;
    var AppComponent;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (burger_service_1_1) {
                burger_service_1 = burger_service_1_1;
            },
            function (burger_list_component_1_1) {
                burger_list_component_1 = burger_list_component_1_1;
            },
            function (burger_detail_component_1_1) {
                burger_detail_component_1 = burger_detail_component_1_1;
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
                    location.go('/burgers');
                }
                AppComponent.prototype.getLinkStyle = function (path) {
                    return this.location.path() === path;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        styles: ["\n    nav {\n      margin-bottom: 40px;\n    }\n    nav > .row {\n      margin-top: 30px;\n    }\n    nav button.router-link-active {\n      background-color: #286090;\n      border-color: #204d74;\n    }\n    main {\n      margin-top: 30px;\n    }\n  "],
                        template: "\n    <nav>\n      <div class=\"row\">\n        <div class=\"col-xs-12 text-center\">\n          <button class=\"btn btn-primary btn-lg\" [class.active]=\"getLinkStyle('#/burgers')\" [routerLink]=\"['Burgers']\">Burgers</button>\n          <!--a [class.active]=\"getLinkStyle('#/map')\" [routerLink]=\"['Map']\">Map</a-->\n          <button class=\"btn btn-primary btn-lg\"[class.active]=\"getLinkStyle('#/about')\" [routerLink]=\"['About']\">About</button>\n        </div>\n      </div>\n    </nav>\n    <main>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </main>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [burger_service_1.BurgerService, router_1.ROUTER_PROVIDERS, router_1.Location]
                    }),
                    router_1.RouteConfig([
                        { path: '/burgers', name: 'Burgers', component: burger_list_component_1.BurgerListComponent },
                        { path: '/burgers/:key', name: 'Burger', component: burger_detail_component_1.BurgerDetailComponent },
                        { path: '/map', name: 'Map', component: map_component_1.MapComponent },
                        { path: '/about', name: 'About', component: about_component_1.AboutComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Location])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            browser_1.bootstrap(AppComponent, [
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
                core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' })
            ]);
        }
    }
});
//# sourceMappingURL=app.component.js.map