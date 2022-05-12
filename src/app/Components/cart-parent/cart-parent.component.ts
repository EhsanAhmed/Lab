import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CategoryAPIServiceService } from 'src/app/Services/category-apiservice.service';
import { ProductsService } from 'src/app/Services/products.service';
import { ICategory } from 'src/app/ViewModels/ICategory';
import { Iproduct } from 'src/app/ViewModels/Iproduct';
import { IshoppingCartItem } from 'src/app/ViewModels/IshoppingCartItem ';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-cart-parent',
  templateUrl: './cart-parent.component.html',
  styleUrls: ['./cart-parent.component.scss']
})
export class CartParentComponent implements OnInit{//,AfterViewInit {
  CategoryList:Array<ICategory>;
  selectedCategoryID:number=0;
  TotalPrice:number=0;
 // item?:IshoppingCartItem={ID:0, Name:"", selectedquantity:0,price:0, }
  CartItems:Array<IshoppingCartItem>=[];
 // PalceOrderCartItems:Array<IshoppingCartItem>|null=null;
  productListItem:Iproduct|undefined=undefined;
  @ViewChild(ProductsComponent) productComp!:ProductsComponent;

  constructor(private CategoryAPIService: CategoryAPIServiceService) { 
   this.CategoryList=[]
  }
  // ngAfterViewInit(): void {
  // //  this.PalceOrderCartItems= this.productComp.CatItems;
  // }
  PalceOrder()
  {
    // this.CartItems.forEach((pro)=>{
    //   this.productListItem= this.ProductService.getProductByID(pro.ProductID)
    //  if( this.productListItem)
    //  {
    //   if(this.productListItem.Quantity<pro.Selectedquantity)
    //   {
    //     pro.Selectedquantity= this.productListItem.Quantity;
    //     this.productListItem.Quantity=0;
    //   }
    //   else
    //   {
    //    this.productListItem.Quantity -=pro.Selectedquantity;
    //   }
    //   this.TotalPrice +=pro.Unitprice*pro.Selectedquantity;
    //  }
    //  })
  }
  ngOnInit(): void {
      this.CategoryAPIService.GetAllCategory().subscribe(ProList=>{
      this.CategoryList= ProList;
      // this.catProductList.forEach(element => {
      //   element.url=this.San.bypassSecurityTrustUrl('data:image/png;base64,'+element.img)
      // });
      console.log( "CategoryList");
      console.log( this.CategoryList);
      })
  }

  DisplayCartItem(Items: IshoppingCartItem)
  {
    this.CartItems.push(Items);
  }
  RemoveCartItem(id:number)
  {

    this.CartItems.forEach((element,index)=>{
      if(element.ID==id) 
     {
       //this.TotalPrice -=element.Unitprice*element.Selectedquantity;
       this.CartItems.splice(index,1);
     }
   });
    
  }


}
