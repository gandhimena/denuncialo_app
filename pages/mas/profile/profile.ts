import{Component,OnInit, ViewChild, ElementRef, ChangeDetectorRef} from"@angular/core";
// >> camera-module-init-code
import { ImageAsset } from "image-asset";

//import * as camera from "nativescript-camera";
// << camera-module-init-code
import * as imagepicker from "nativescript-imagepicker";

@Component({
    selector:"prfile",
    templateUrl:"pages/mas/profile/profile.html",
    styleUrls: ["pages/mas/profile/profile-commons.css"]
})


export class ProfileComponent{
        
    //checked
    public fSwitchValue = false;
    public itemThumb ="";

    pendientes:number= 129;
    validados:number= 15;
    invalidados:number= 3;  
    name = "Gandhi Mena Salas";
    nameUser = "Gandhi Mena Salas"
    // galery-photo
    defaultPhoto = "res://foto_profile";
    items = [];

    constructor( private _changeDetectorRef: ChangeDetectorRef){}

    OnInit(){
        
    }

    public FirstCheckChange(result) {
        switch (result) {
            case true:
                this.name = "anonimo";
            break;
            case false:
            this.name = this.nameUser;
        }
    }


    //functions 
    changeProfilePhoto() {
		let context = imagepicker.create({
            mode: "single"
        });

        context
            .authorize()
            .then(() => {
                this.items = [];
                return context.present();
            })
            .then((selection) => {
                selection.forEach(function(selected) {
				});
                this.items = selection;
				for(let item of this.items){
					this.defaultPhoto = item.thumb;
                    this.itemThumb = item.thumb;
				}
				this._changeDetectorRef.detectChanges();
            }).catch(function (e) {
                console.log(e);
            });
    }


    /*
    // >> camera-module-photo-code
        public imageTaken: ImageAsset;
        public saveToGallery: boolean = true;
        public keepAspectRatio: boolean = true;
        public width: number = 300;
        public height: number = 300;
    
        onTakePhoto() {
            let options = {
                width: this.width,
                height: this.height,
                keepAspectRatio: this.keepAspectRatio,
                saveToGallery: this.saveToGallery
            };
            this.onCheckForCamera()
            this.onRequestPermissions()
            camera.takePicture(options)
                .then(imageAsset => {
                    this.imageTaken = imageAsset;
                }).catch(err => {
                    console.log(err.message);
                });
        }
    // << camera-module-photo-code

    // >> camera-module-perm-code
        onRequestPermissions() {
            camera.requestPermissions();
        }
    // << camera-module-perm-code

    // >> camera-module-avai-code
        onCheckForCamera() {
            let isCameraAvailable = camera.isAvailable();
            console.log("Is camera hardware available: " + isCameraAvailable);
        }
    // << camera-module-avai-code
    */


}