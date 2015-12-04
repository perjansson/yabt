var router_1 = require('angular2/router');
var burgers_component_1 = require('./burgers.component');
exports.ROUTE_NAMES = {
    burgers: 'Burgers',
    map: 'Map'
};
exports.ROUTES = [
    new router_1.Route({ path: "/burgers", component: burgers_component_1.BurgersComponent, name: exports.ROUTE_NAMES.burgers }),
    new router_1.Route({ path: "/map", component: burgers_component_1.BurgersComponent, name: exports.ROUTE_NAMES.map })
];
//# sourceMappingURL=routes.js.map