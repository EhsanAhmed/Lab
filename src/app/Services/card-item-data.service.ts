import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 
import { Iproduct } from '../ViewModels/Iproduct';
import { IshoppingCartItem } from '../ViewModels/IshoppingCartItem ';
//import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CardItemDataService {
  AddCartItems: IshoppingCartItem[]=[];
  numOfItems=new BehaviorSubject<Array<IshoppingCartItem>>([]);
  CartLocal=new BehaviorSubject<Array<IshoppingCartItem>>([]);

  p:IshoppingCartItem={ID:0, Name:"", selectedquantity:0,price:0, url:URL}
  private nameSource = new BehaviorSubject<IshoppingCartItem>(this.p);
  CardItems = this.nameSource.asObservable()


  constructor() { 
    // const ls =JSON.parse(localStorage.getItem('ppp'));
    // if(ls)
    // this.CartLocal.next(ls)
  }
//  AddLocal(product:IshoppingCartItem)
//  {
//   const ls =localStorage.getItem();
//   if(ls)
//   this.CartLocal.next(ls)
//  }

  changeCardItems(Products: IshoppingCartItem) {
    this.nameSource.next(Products);
  }

  AddItems(product: IshoppingCartItem){
    const exist =this.AddCartItems.find(item=>{
      return item.ID === product.ID ;
    });

    if(exist)
    exist.selectedquantity++
    else 
    this.AddCartItems.push(product);
     this.numOfItems.next(this.AddCartItems)
  }
}
