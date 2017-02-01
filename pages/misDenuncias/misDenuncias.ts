import {Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit} from "@angular/core";
import {SegmentedBar, SegmentedBarItem, SelectedIndexChangedEventData} from "ui/segmented-bar";
import {Page} from "ui/page";

@Component({
    selector:"misDenuncias",
    templateUrl:"pages/misDenuncias/misDenuncias.html",
    styleUrls:["pages/misDenuncias/misDenuncias-commons.css"],
    providers:[SegmentedBar, SegmentedBarItem]
})

export class MisDenunciasComponent implements OnInit{

    //Properties
    //** listDemands
    listDemands: Array<Object> = [];
    imageVideo="video_screen";
    iconStatus="icon_valid";
    hours="2h";
    location="Benito Juárez";
    description="lordBici se metió en el área de bicicletas y se fue de la…";
    name = "Danielito88";

    //** SegmentedVariables
    selectedIndex: number;
    segmentedItems:Array<Object> = [];
    @ViewChild("tabs") tabs: ElementRef;

    constructor(){
    }

    //viewDidLoad
    ngOnInit(){
        this.listDemands.push(
            {name:this.name},
            {name:this.name},
            {name:this.name},
            {name:this.name},
            {name:this.name},
            {name:this.name},
        );
        
        this.selectedIndex = 0;
        this.segmentedItems = [
            {title:"Pendientes"},
            {title:"Validados"},    
            {title:"Invalidados"}
            ];
    }
    
    //functions

    ngAfterViewInit(){
        this.tabs.nativeElement.on(SegmentedBar.selectedIndexChangedEvent,(args: SelectedIndexChangedEventData) =>{
            switch(args.newIndex){
                case 0:
                    alert("Pendientes")
                    break;
                case 1:
                    alert("Validados")
                    break;
                case 2:
                    alert("Invalidados")
                    break;
            }
        })
    }
    ngOnDestroy(){}

    
}