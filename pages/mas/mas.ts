import {Component, OnInit, ElementRef, ViewChild} from "@angular/core";
import {FlexboxLayout,FlexDirection,FlexGrow,AlignSelf,FlexShrink,FlexWrap,FlexWrapBefore,JustifyContent,AlignItems,AlignContent} from"ui/layouts/flexbox-layout";
import {Router} from"@angular/router";

@Component({
    selector:"mas",
    templateUrl:"pages/mas/mas.html",
    styleUrls:["pages/mas/mas-commons.css"]
})

export class MasComponent{
    
    //properties
    
    
    constructor(private router:Router){}

    //viewDidLoad
    OnInit(){
        
    }

    //events
    goToProfile(name:string){

        this.router.navigate(["/profile"]);
    }
    
}