import { Component, OnInit } from '@angular/core';
import { CardItemDataService } from 'src/app/Services/card-item-data.service';
import { DiscountOffers } from 'src/app/ViewModels/DiscountOffers.enum';
import { Store } from 'src/app/ViewModels/Store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 itemCardNum:number=0;
  constructor(private CardService:CardItemDataService) {
   
   }

  ngOnInit(): void {
    this.CardService.numOfItems.subscribe(d=>{
    this.itemCardNum=d.length;
    })
  }

}
