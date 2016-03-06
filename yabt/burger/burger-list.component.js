System.register(['angular2/core', 'angular2/common', 'angular2/router', './burger-preview.component', './burger.service'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, burger_preview_component_1, burger_service_1;
    var BurgerListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (burger_preview_component_1_1) {
                burger_preview_component_1 = burger_preview_component_1_1;
            },
            function (burger_service_1_1) {
                burger_service_1 = burger_service_1_1;
            }],
        execute: function() {
            BurgerListComponent = (function () {
                function BurgerListComponent(burgerService, router) {
                    this.burgerService = burgerService;
                    this.router = router;
                }
                BurgerListComponent.prototype.ngOnInit = function () {
                    this.burgers = this.getBurgers();
                };
                BurgerListComponent.prototype.getBurgers = function () {
                    var _this = this;
                    this.burgers = [];
                    this.burgerService.getBurgers().then(function (burgers) { return _this.burgers = burgers; });
                    return this.burgers;
                };
                BurgerListComponent.prototype.onBurgerSelected = function (burger) {
                    console.log('Burger ' + burger.key + ' selected');
                    this.router.navigate(['Burger', { key: burger.key }]);
                };
                BurgerListComponent = __decorate([
                    core_1.Component({
                        selector: 'burger-list',
                        providers: [burger_service_1.BurgerService],
                        template: "\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <burger-preview [burger]=\"burger\" [rank]=\"i+1\" (selected)=onBurgerSelected($event) *ngFor=\"#burger of burgers; #i=index\"></burger-preview>\n      </div>\n    </div>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, burger_preview_component_1.BurgerPreviewComponent]
                    }), 
                    __metadata('design:paramtypes', [burger_service_1.BurgerService, router_1.Router])
                ], BurgerListComponent);
                return BurgerListComponent;
            }());
            exports_1("BurgerListComponent", BurgerListComponent);
        }
    }
});
//# sourceMappingURL=burger-list.component.js.map