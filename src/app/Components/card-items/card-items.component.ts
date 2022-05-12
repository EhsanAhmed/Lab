import { Component, OnInit } from '@angular/core';
import { CardItemDataService } from 'src/app/Services/card-item-data.service';
import { IshoppingCartItem } from 'src/app/ViewModels/IshoppingCartItem ';

@Component({
  selector: 'app-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.scss']
})
export class CardItemsComponent implements OnInit {
  CardItems: Array<IshoppingCartItem>=[];
  constructor(private CardItemDataService:CardItemDataService) { }

  ngOnInit(): void {
   this.CardItemDataService.CardItems.subscribe(data=>{
     this.CardItems.push(data);
     console.log("Card Item Component---: "+this.CardItems[0].Name);
   })
  }

}
