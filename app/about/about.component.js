System.register(['angular2/core', 'angular2/common', 'angular2/router', './tester.service'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, tester_service_1;
    var AboutComponent;
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
            function (tester_service_1_1) {
                tester_service_1 = tester_service_1_1;
            }],
        execute: function() {
            AboutComponent = (function () {
                function AboutComponent(testerService) {
                    this.testerService = testerService;
                }
                AboutComponent.prototype.getTesters = function () {
                    var _this = this;
                    this.testers = [];
                    this.testerService.getTesters().then(function (testers) { return _this.testers = testers; });
                    return this.testers;
                };
                AboutComponent.prototype.ngOnInit = function () {
                    this.testers = this.getTesters();
                };
                AboutComponent = __decorate([
                    core_1.Component({
                        selector: 'about',
                        providers: [tester_service_1.TesterService],
                        templateUrl: 'app/about/about.component.html',
                        styleUrls: ['app/about/about.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [tester_service_1.TesterService])
                ], AboutComponent);
                return AboutComponent;
            }());
            exports_1("AboutComponent", AboutComponent);
        }
    }
});
//# sourceMappingURL=about.component.js.map