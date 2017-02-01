import {Component, OnInit, ViewChild, ElementRef} from "@angular/core";
import { FlexboxLayout, FlexDirection, FlexWrap, JustifyContent, AlignItems, AlignContent, AlignSelf } from "ui/layouts/flexbox-layout";

@Component({
    selector:"home",
    templateUrl:"pages/home2/home2.html",
    styleUrls:["pages/home2/home2-commons.css"]
})

export class Home2Component{
    imageVideo="video_screen";
    iconStatus="icon_valid";
    
    
    listDemands: Array<Object> = [];
    
    ngOnInit(){
        this.listDemands.push(
            {description:"#lordBici se metió en el área de bicicletas y se fue de la…"},
            );
    }

    
}