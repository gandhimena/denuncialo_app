"use strict";
var core_1 = require("@angular/core");
var segmented_bar_1 = require("ui/segmented-bar");
var MisDenunciasComponent = (function () {
    function MisDenunciasComponent() {
        //Properties
        //** listDemands
        this.listDemands = [];
        this.imageVideo = "video_screen";
        this.iconStatus = "icon_valid";
        this.hours = "2h";
        this.location = "Benito Juárez";
        this.description = "lordBici se metió en el área de bicicletas y se fue de la…";
        this.name = "Danielito88";
        this.segmentedItems = [];
    }
    //viewDidLoad
    MisDenunciasComponent.prototype.ngOnInit = function () {
        this.listDemands.push({ name: this.name }, { name: this.name }, { name: this.name }, { name: this.name }, { name: this.name }, { name: this.name });
        this.selectedIndex = 0;
        this.segmentedItems = [
            { title: "Pendientes" },
            { title: "Validados" },
            { title: "Invalidados" }
        ];
    };
    //functions
    MisDenunciasComponent.prototype.ngAfterViewInit = function () {
        this.tabs.nativeElement.on(segmented_bar_1.SegmentedBar.selectedIndexChangedEvent, function (args) {
            switch (args.newIndex) {
                case 0:
                    alert("Pendientes");
                    break;
                case 1:
                    alert("Validados");
                    break;
                case 2:
                    alert("Invalidados");
                    break;
            }
        });
    };
    MisDenunciasComponent.prototype.ngOnDestroy = function () { };
    __decorate([
        core_1.ViewChild("tabs"), 
        __metadata('design:type', core_1.ElementRef)
    ], MisDenunciasComponent.prototype, "tabs", void 0);
    MisDenunciasComponent = __decorate([
        core_1.Component({
            selector: "misDenuncias",
            templateUrl: "pages/misDenuncias/misDenuncias.html",
            styleUrls: ["pages/misDenuncias/misDenuncias-commons.css"],
            providers: [segmented_bar_1.SegmentedBar, segmented_bar_1.SegmentedBarItem]
        }), 
        __metadata('design:paramtypes', [])
    ], MisDenunciasComponent);
    return MisDenunciasComponent;
}());
exports.MisDenunciasComponent = MisDenunciasComponent;
//# sourceMappingURL=misDenuncias.js.map