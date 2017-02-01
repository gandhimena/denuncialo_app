"use strict";
var core_1 = require("@angular/core");
var Home2Component = (function () {
    function Home2Component() {
        this.imageVideo = "video_screen";
        this.iconStatus = "icon_valid";
        this.listDemands = [];
    }
    Home2Component.prototype.ngOnInit = function () {
        this.listDemands.push({ description: "#lordBici se metió en el área de bicicletas y se fue de la…" });
    };
    Home2Component = __decorate([
        core_1.Component({
            selector: "home",
            templateUrl: "pages/home2/home2.html",
            styleUrls: ["pages/home2/home2-commons.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], Home2Component);
    return Home2Component;
}());
exports.Home2Component = Home2Component;
//# sourceMappingURL=home2.js.map