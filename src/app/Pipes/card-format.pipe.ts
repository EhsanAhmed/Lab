import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardFormat'
})
export class CardFormatPipe implements PipeTransform {
  newCard:string="";
  transform(Card:string): unknown {
   for(let i=0; i<Card.length; i++)
   {
     if(i%4==0 &&i!=0)
      this.newCard+="-";
      this.newCard+=Card[i];
   }
    return this.newCard;
  }

}
