var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var burger_service_1 = require('./burger/burger.service');
var app_component_1 = require('./app.component');
angular2_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    burger_service_1.BurgerService,
    angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]);
//# sourceMappingURL=boot.js.map