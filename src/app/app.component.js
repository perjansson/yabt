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
var routes_1 = require('./routes');
var AppComponent = (function () {
    function AppComponent() {
        this.routes = routes_1.ROUTE_NAMES;
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: "\n    <nav>\n      <div class=\"row\">\n        <div class=\"col-xs-12 text-center\">\n          <a [router-link]=\"[routes.burgers]\">Burgers</a>\n          <a [router-link]=\"[routes.map]\">Map</a>\n        </div>\n      </div>\n    </nav>\n    <main>\n      <div class=\"row\">\n        <div class=\"col-xs-offset-1 col-xs-10 col-lg-offset-2 col-lg-8\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </main>\n  ",
            styles: ["\n    nav a {\n      padding: 10px 20px;\n    }\n    nav a:hover {\n      background: #777;\n      text-decoration: none;\n      color: #fff;\n    }\n  "],
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig(routes_1.ROUTES), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map