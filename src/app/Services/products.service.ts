import { Injectable } from '@angular/core';
import { Iproduct } from '../ViewModels/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
//  ProductList:Array<Iproduct>;
  constructor() {
   // this.ProductList=
  // [ {name:"Samsung", id:1, img:"assets/image1.jpeg", price:33, cateogryID:1,catName:"Samrt Phones",quantity:3, url:""}]
   
   }

  //  getProductsByCateogryID(catID: number): Iproduct[] {
  //   if (catID == 0) {
  //     return this.ProductList;
  //   }
  //   else
  //     return this.ProductList.filter(prd => prd.cateogryID == catID);
  // }

  // getProductByID(prdID: number): Iproduct|undefined
  // {
  //  return this.ProductList.find(prd=>prd.id==prdID);
  // }
  // getPrdIDsList(): number[]
  // {
  //   return this.ProductList.map(prd=>prd.id);
  // }

}
