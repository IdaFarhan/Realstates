import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
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
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  dataSource: any;
  public displayedItems: any;
  
  constructor() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator.page.subscribe((pageEvent: PageEvent) => {
      const startIndex = pageEvent.pageIndex * pageEvent.pageSize;
      const endIndex = startIndex + pageEvent.pageSize;
      const itemsShowed = this.dataSource.filteredData.slice(startIndex, endIndex);
      console.log(itemsShowed);
      this.displayedItems = itemsShowed;
  });
  }

  ngOnInit(): void {
    this.realEstates = JSON.parse(JSON.stringify(this.realEstates));
    console.log(this.realEstates)
    this.dataSource = new MatTableDataSource(this.realEstates.data)
    console.log( this.dataSource )
    this.displayedItems = this.dataSource.filteredData.slice(0,4);

  }

}
