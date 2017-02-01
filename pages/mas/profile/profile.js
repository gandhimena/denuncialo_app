"use strict";
var core_1 = require("@angular/core");
//import * as camera from "nativescript-camera";
// << camera-module-init-code
var imagepicker = require("nativescript-imagepicker");
var ProfileComponent = (function () {
    function ProfileComponent(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        //checked
        this.fSwitchValue = false;
        this.itemThumb = "";
        this.pendientes = 129;
        this.validados = 15;
        this.invalidados = 3;
        this.name = "Gandhi Mena Salas";
        this.nameUser = "Gandhi Mena Salas";
        // galery-photo
        this.defaultPhoto = "res://foto_profile";
        this.items = [];
    }
    ProfileComponent.prototype.OnInit = function () {
    };
    ProfileComponent.prototype.FirstCheckChange = function (result) {
        switch (result) {
            case true:
                this.name = "anonimo";
                break;
            case false:
                this.name = this.nameUser;
        }
    };
    //functions 
    ProfileComponent.prototype.changeProfilePhoto = function () {
        var _this = this;
        var context = imagepicker.create({
            mode: "single"
        });
        context
            .authorize()
            .then(function () {
            _this.items = [];
            return context.present();
        })
            .then(function (selection) {
            selection.forEach(function (selected) {
            });
            _this.items = selection;
            for (var _i = 0, _a = _this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.defaultPhoto = item.thumb;
                _this.itemThumb = item.thumb;
            }
            _this._changeDetectorRef.detectChanges();
        }).catch(function (e) {
            console.log(e);
        });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: "prfile",
            templateUrl: "pages/mas/profile/profile.html",
            styleUrls: ["pages/mas/profile/profile-commons.css"]
        }), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.js.map