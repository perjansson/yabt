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
var burger_service_1 = require('./burger.service');
var BurgersComponent = (function () {
    function BurgersComponent(burgerService) {
        this.burgerService = burgerService;
    }
    BurgersComponent.prototype.getBurgers = function () {
        var _this = this;
        this.burgers = [];
        this.burgerService.getBurgers().then(function (burgers) { return _this.burgers = burgers; });
        return this.burgers;
    };
    BurgersComponent.prototype.ngOnInit = function () {
        this.burgers = this.getBurgers();
    };
    BurgersComponent = __decorate([
        angular2_1.Component({
            selector: 'burgers',
            providers: [burger_service_1.BurgerService],
            template: "\n    <ol class=\"burgers\">\n      <li *ng-for=\"#burger of burgers\">\n        <a href=\"{{ burger.url }}\" target=\"_blank\">{{ burger.name }}</a>\n        <img src=\"img/{{ burger.img }}\" class=\"img-responsive img-rounded\"/>\n      </li>\n    </ol>\n    ",
            styles: ["\n      .burgers li {\n        font-size: 2em;\n        margin-bottom: 20px;\n      }\n      "],
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [burger_service_1.BurgerService])
    ], BurgersComponent);
    return BurgersComponent;
})();
angular2_1.bootstrap(BurgersComponent);
//# sourceMappingURL=burgers.js.map