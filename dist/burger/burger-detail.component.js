System.register(['angular2/core', 'angular2/router', './burger.service'], function(exports_1, context_1) {
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
    var core_1, router_1, burger_service_1;
    var BurgerDetailComponent;
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
            }],
        execute: function() {
            BurgerDetailComponent = (function () {
                function BurgerDetailComponent(burgerService, routeParams) {
                    this.burgerService = burgerService;
                    this.routeParams = routeParams;
                }
                BurgerDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this.burger) {
                        var key = this.routeParams.get('key');
                        this.burgerService.getBurger(key).then(function (burger) { return _this.burger = burger; });
                        this.burgerService.getRanking(key).then(function (ranking) { return _this.ranking = ranking; });
                    }
                };
                BurgerDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'burger-detail',
                        styles: ["\n    .burger-detail h4 {\n      display: inline;\n    }\n    .burger-detail .row {\n      margin-bottom: 15px;\n    }\n    .burger {\n      margin-bottom: 40px;\n    }\n    .polaroid {\n      position: relative;\n    }\n    .polaroid img {\n      cursor: pointer;\n      border: 10px solid #fff;\n      border-bottom: 70px solid #fff;\n      -webkit-box-shadow: 8px 8px 8px #888;\n      -moz-box-shadow: 8px 8px 8px #888;\n      box-shadow: 8px 8px 8px #888;\n    }\n    .polaroid p {\n      position: absolute;\n      text-align: center;\n      margin-left: 30px;\n      margin-bottom: 20px;\n      bottom: 0px;\n      font: 400 18px/1 'Inconsolata', cursive;\n      color: #000;\n    }\n    .polaroid p a {\n      font-size: 1.2em;\n    }\n    @media only screen and (min-width : 768px) {\n      .polaroid p a {\n        font-size: 1.5em;\n      }\n    }\n  "],
                        template: "\n    <div *ngIf=\"burger\" class=\"burger-detail row\">\n    \t<div class=\"col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8\">\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <header>\n      \t\t\t   <h3>Mmm... sugen p\u00E5 en burgare fr\u00E5n {{burger.name}}?</h3>\n            </header>\n          </div>\n        </div>\n        <div class=\"row\">\n        \t<div class=\"col-xs-12\">\n            <a href=\"{{ burger.url }}\" target=\"_blank\">Kolla in deras hemsida...</a>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12 burger polaroid\" [hidden]=\"burger.key===''\" id=\"{{burger.key}}\">\n            <p>\n              <a href=\"{{ burger.url }}\" target=\"_blank\">{{ ranking + '. ' + burger.name }}</a>\n            </p>\n            <img src=\"img/{{ burger.key + '.jpg' }}\" (click)=\"onSelect(burger)\" class=\"img-responsive\" />\n          </div>\n        </div>\n    \t</div>\n    </div>\n  ",
                    }), 
                    __metadata('design:paramtypes', [burger_service_1.BurgerService, router_1.RouteParams])
                ], BurgerDetailComponent);
                return BurgerDetailComponent;
            }());
            exports_1("BurgerDetailComponent", BurgerDetailComponent);
        }
    }
});
//# sourceMappingURL=burger-detail.component.js.map