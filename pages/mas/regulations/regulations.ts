import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: "regulations",
	templateUrl: "pages/mas/regulations/regulations.html",
	styleUrls: ["pages/mas/regulations/regulations-commons.css"]
})

export class RegulationsComponent implements OnInit {

	//properties
	image = "res://foto_profile";
	title="Circ. en sentido contrario"
	//public myItems = [];

	
	//constructor
	constructor() { 

	}
		
	ngOnInit() { 
		/*this.myItems.push(
			{title: this.title},
			{title: this.title},
		);*/
	}

	alert(){
		alert("reglamento1");
	}

}