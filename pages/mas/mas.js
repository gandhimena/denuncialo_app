"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var MasComponent = (function () {
    //properties
    function MasComponent(router) {
        this.router = router;
    }
    //viewDidLoad
    MasComponent.prototype.OnInit = function () {
    };
    //events
    MasComponent.prototype.goToProfile = function (name) {
        this.router.navigate(["/profile"]);
    };
    MasComponent = __decorate([
        core_1.Component({
            selector: "mas",
            templateUrl: "pages/mas/mas.html",
            styleUrls: ["pages/mas/mas-commons.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], MasComponent);
    return MasComponent;
}());
exports.MasComponent = MasComponent;
//# sourceMappingURL=mas.js.map