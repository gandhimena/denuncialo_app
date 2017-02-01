"use strict";
var core_1 = require('@angular/core');
var RegulationsComponent = (function () {
    //public myItems = [];
    //constructor
    function RegulationsComponent() {
        //properties
        this.image = "res://foto_profile";
        this.title = "Circ. en sentido contrario";
    }
    RegulationsComponent.prototype.ngOnInit = function () {
        /*this.myItems.push(
            {title: this.title},
            {title: this.title},
        );*/
    };
    RegulationsComponent.prototype.alert = function () {
        alert("reglamento1");
    };
    RegulationsComponent = __decorate([
        core_1.Component({
            selector: "regulations",
            templateUrl: "pages/mas/regulations/regulations.html",
            styleUrls: ["pages/mas/regulations/regulations-commons.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], RegulationsComponent);
    return RegulationsComponent;
}());
exports.RegulationsComponent = RegulationsComponent;
//# sourceMappingURL=regulations.js.map