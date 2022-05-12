import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from 'src/app/ViewModels/DiscountOffers.enum';
import { Store } from 'src/app/ViewModels/Store';

@Component({
  selector: 'app-defination',
  templateUrl: './defination.component.html',
  styleUrls: ['./defination.component.scss']
})
export class DefinationComponent implements OnInit {
  Discount:DiscountOffers=DiscountOffers.NoDiscount;
  store:Store=new Store();
  date:Date=new Date();
  // id:string="29909011509345";
  // card:string="1234567890123456";
  constructor() { 
    this.store.Name="Electronic Devices Store";
    this.store.Branches=["assuit","minua", "cairo" ];
    this.store.Logo="https://fakeimg.pl/250x100/";
  }

  ngOnInit(): void {
  }

}
