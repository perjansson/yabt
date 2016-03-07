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
                        styles: ["\n    .intro {\n      margin-bottom: 40px;\n    }\n\n    .testers {\n      margin-bottom: 20px;\n    }\n\n    .testers > div {\n      display: block;\n    }\n  "],
                        template: "\n    <div class=\"row\">\n      <div class=\"col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8\">\n        <h4>About</h4>\n        <p class=\"intro\">\n          We live and work in Stockholm, Sweden. We are software developers. We love hamburgers. We love it so much we decided to try and find the best lunch hamburger in town. We have a pretty simple criteria for which hamburgers to try and we have an even simpler way to rank the hamburgers? So, if you\u2019re ever in Stockholm and in the mood for a hamburger look no further. Here\u2019s the current standings of the awesome hamburgers we\u2019ve tried:\n        </p>\n\n        <h4>How did we rank the burgers?</h4>\n        <p class=\"intro\">\n          We use \uD83D\uDC4D (thumb up) or \uD83D\uDC4E (thumb down) to vote if we believe the hamburger we just ate is better or worse then the hamburger located last in the standings. Each hamburger will start last and work it\u2019s way up by getting two or more thumbs up. It\u2019s a majority decision by the three of us, so as long as the hamburger gets two or more thumbs up it will keep climbing. When the hamburger gets two or more thumbs down it means we\u2019ve found its position in the standings.\n        </p>\n\n        <h4>What is the criteria to be in the competition?</h4>\n        <p class=\"intro\">\n          The restaurant, which preferably shouldn\u2019t be a big chain, has to serve hamburgers at lunch time on workdays in Stockholm (including its immediate surroundings).\n        </p>\n\n        <h4>Who are we?</h4>\n        <p>\n          Three software developers that love to code and eat burgers.\n        </p>\n        <div class=\"col-sm-12 testers\">\n          <div *ngFor=\"#tester of testers\" [hidden]=\"tester.key===''\" id=\"{{tester.key}}\">\n            <a href=\"{{ tester.url }}\" target=\"_blank\">{{ tester.name }}</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
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