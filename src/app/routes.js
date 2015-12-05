var router_1 = require('angular2/router');
var burgers_component_1 = require('./burger/burgers.component');
var burger_component_1 = require('./burger/burger.component');
var map_component_1 = require('./map/map.component');
var about_component_1 = require('./about/about.component');
exports.ROUTE_NAMES = {
    burgers: 'Burgers',
    burger: 'Burger',
    map: 'Map',
    about: 'About'
};
exports.ROUTES = [
    new router_1.Route({ path: "/burgers", component: burgers_component_1.BurgersComponent, name: exports.ROUTE_NAMES.burgers }),
    new router_1.Route({ path: "/burgers/:key", component: burger_component_1.BurgerComponent, name: exports.ROUTE_NAMES.burger }),
    new router_1.Route({ path: "/map", component: map_component_1.MapComponent, name: exports.ROUTE_NAMES.map }),
    new router_1.Route({ path: "/about", component: about_component_1.AboutComponent, name: exports.ROUTE_NAMES.about })
];
//# sourceMappingURL=routes.js.map