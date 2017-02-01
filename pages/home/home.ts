import {Component, OnInit, ViewChild, ElementRef} from "@angular/core";

@Component({
    selector:"home",
    templateUrl:"pages/home/home.html",
    styleUrls:["pages/home/home-commons.css"]
})

export class HomeComponent{
    imageVideo="video_screen";
    iconStatus="icon_valid";
    
    listDemands: Array<Object> = [];
    
    ngOnInit(){
        this.listDemands.push(
            {description:"#lordBici se metió en el área de bicicletas y se fue de la…"},
            {description:"#lordBici se metió en el área de bicicletas y se fue de la…"},
            {description:"#lordBici se metió en el área de bicicletas y se fue de la…"},
            {description:"#lordBici se metió en el área de bicicletas y se fue de la…"},
            {description:"#lordBici se metió en el área de bicicletas y se fue de la…"},
            {description:"#lordBici se metió en el área de bicicletas y se fue de la…"},
            {description:"#lordBici se metió en el área de bicicletas y se fue de la…"},
            {description:"#lordBici se metió en el área de bicicletas y se fue de la…"},
            );
    }

}