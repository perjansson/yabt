var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var burgerservice_1 = require('./burgerservice');
var DisplayComponent = (function () {
    function DisplayComponent(burgerService) {
        this.burgers = burgerService.burgers;
    }
    DisplayComponent = __decorate([
        angular2_1.Component({
            selector: 'burgers',
            viewInjector: [burgerservice_1.BurgerService]
        }),
        angular2_1.View({
            template: "\n    <ol>\n      <li *ng-for=\"#burger of burgers\" class=\"burger\">\n        <a href=\"{{ burger.url }}\" target=\"_blank\">{{ burger.name }}</a>\n        <img src=\"img/{{ burger.img }}\" class=\"img-responsive img-rounded\"/>\n      </li>\n    </ol>\n  ",
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [burgerservice_1.BurgerService])
    ], DisplayComponent);
    return DisplayComponent;
})();
angular2_1.bootstrap(DisplayComponent);
