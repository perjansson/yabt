System.register(['angular2/core', 'angular2/router', './burger'], function(exports_1, context_1) {
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
    var core_1, router_1, burger_1;
    var BurgerPreviewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (burger_1_1) {
                burger_1 = burger_1_1;
            }],
        execute: function() {
            BurgerPreviewComponent = (function () {
                function BurgerPreviewComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', burger_1.Burger)
                ], BurgerPreviewComponent.prototype, "burger", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], BurgerPreviewComponent.prototype, "rank", void 0);
                BurgerPreviewComponent = __decorate([
                    core_1.Component({
                        selector: 'burger-preview',
                        styles: ["\n    .burger {\n      margin-bottom: 40px;\n    }\n    .polaroid {\n      position: relative;\n    }\n    .polaroid img {\n      cursor: pointer;\n      border: 10px solid #fff;\n      border-bottom: 70px solid #fff;\n      -webkit-box-shadow: 8px 8px 8px #888;\n      -moz-box-shadow: 8px 8px 8px #888;\n      box-shadow: 8px 8px 8px #888;\n    }\n    .polaroid p {\n      position: absolute;\n      text-align: center;\n      margin-left: 30px;\n      margin-bottom: 20px;\n      bottom: 0px;\n      font: 400 18px/1 'Inconsolata', cursive;\n      color: #000;\n    }\n    .polaroid p a {\n      font-size: 1.2em;\n    }\n\n    @media only screen and (min-width : 768px) {\n\n      .polaroid p a {\n        font-size: 1.5em;\n      }\n\n    }\n  "],
                        template: "\n    <div class=\"burger polaroid col-xs-offset-1 col-xs-10 col-md-offset-3 col-md-6\" [hidden]=\"burger.key===''\" id=\"{{burger.key}}\">\n      <p>\n        <a href=\"{{ burger.url }}\" target=\"_blank\">{{ rank + '. ' + burger.name }}</a>\n      </p>\n      <img src=\"/img/{{ burger.key + '.jpg' }}\" [routerLink]=\"['Burger', { key: burger.key }]\" class=\"img-responsive\" />\n    </div>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], BurgerPreviewComponent);
                return BurgerPreviewComponent;
            }());
            exports_1("BurgerPreviewComponent", BurgerPreviewComponent);
        }
    }
});
//# sourceMappingURL=burger-preview.component.js.map