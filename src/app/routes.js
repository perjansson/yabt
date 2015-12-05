var router_1 = require('angular2/router');
var burgers_component_1 = require('./burger/burgers.component');
var map_component_1 = require('./map/map.component');
var about_component_1 = require('./about/about.component');
exports.ROUTE_NAMES = {
    burgers: 'Burgers',
    map: 'Map',
    about: 'About'
};
exports.ROUTES = [
    new router_1.Route({ path: "/burgers", component: burgers_component_1.BurgersComponent, name: exports.ROUTE_NAMES.burgers }),
    new router_1.Route({ path: "/map", component: map_component_1.MapComponent, name: exports.ROUTE_NAMES.map }),
    new router_1.Route({ path: "/about", component: about_component_1.AboutComponent, name: exports.ROUTE_NAMES.about })
];
//# sourceMappingURL=routes.js.map