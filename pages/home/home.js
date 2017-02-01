"use strict";
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
        this.imageVideo = "video_screen";
        this.iconStatus = "icon_valid";
        this.listDemands = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.listDemands.push({ description: "#lordBici se metió en el área de bicicletas y se fue de la…" }, { description: "#lordBici se metió en el área de bicicletas y se fue de la…" }, { description: "#lordBici se metió en el área de bicicletas y se fue de la…" }, { description: "#lordBici se metió en el área de bicicletas y se fue de la…" }, { description: "#lordBici se metió en el área de bicicletas y se fue de la…" }, { description: "#lordBici se metió en el área de bicicletas y se fue de la…" }, { description: "#lordBici se metió en el área de bicicletas y se fue de la…" }, { description: "#lordBici se metió en el área de bicicletas y se fue de la…" });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home",
            templateUrl: "pages/home/home.html",
            styleUrls: ["pages/home/home-commons.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.js.map