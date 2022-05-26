import { Component, OnInit } from '@angular/core';
import * as Data from '../input.json';  


interface realestate {
  price: string,
  image: string,
  title: string,
  url: string,
  bd: string,
  ba: string,
  ft: string,
  location: string,
  house: string
}

@Component({
  selector: 'app-realestate',
  templateUrl: './realestate.component.html',
  styleUrls: ['./realestate.component.scss']
})
export class RealestateComponent implements OnInit {
  realEstates: any = Data;
  showFiller = false;
  
  constructor() { }

  ngOnInit(): void {
    this.realEstates = JSON.parse(JSON.stringify(this.realEstates));
    console.log(this.realEstates)
  }

}
