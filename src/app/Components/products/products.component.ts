import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DiscountOffers } from 'src/app/ViewModels/DiscountOffers.enum';
import { ICategory } from 'src/app/ViewModels/ICategory';
import { Iproduct } from 'src/app/ViewModels/Iproduct';
import { Store } from 'src/app/ViewModels/Store';
import { IshoppingCartItem } from 'src/app/ViewModels/IshoppingCartItem ';
import { ProductsService } from 'src/app/Services/products.service';
import { Router } from '@angular/router';
import { ProductAPIServiceService } from 'src/app/Services/product-apiservice.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { CardItemDataService } from 'src/app/Services/card-item-data.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnChanges {
  isImgShown:boolean=true;
  isImgShownTable:boolean=true;
  isImgShownDiv:boolean=false;
  ClientName:string="";
 @Input() reciveSelectedcatId:number=0;
  ProductAmonut:number=0;
  //item:Array<IshoppingCartItem>=[];
  pro!:IshoppingCartItem;
 // @Output() OnAddToCart: EventEmitter<IshoppingCartItem>;
 // mySelect:Array<Iproduct>=[]
  catProductList:Iproduct[]=[];

  constructor(
   // private ProductService: ProductsService, 
   private ProductAPIService: ProductAPIServiceService,
    private router:Router, private San:DomSanitizer, private dialog:MatDialog, private CardItemDataService: CardItemDataService)
   {
     this.ClientName="Ehsan";
    // this.OnAddToCart=new EventEmitter<IshoppingCartItem>();
   // this.mySelect=this.ProductList.filter(p=>p.CateogryID == 1)

  }
  openDialog(pro:Iproduct) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data=pro;
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(DialogBodyComponent, dialogConfig);
}


  ngOnChanges(changes: SimpleChanges): void {
    if(this.reciveSelectedcatId!=0){
      this.ProductAPIService.getProductsByCatID(this.reciveSelectedcatId).subscribe( productList=>{
       console.log("reciveSelectedcatId : "+this.reciveSelectedcatId)
        this.catProductList=productList;
        this.catProductList.forEach(element => {
          element.url=this.San.bypassSecurityTrustUrl('data:image/png;base64,'+element.img)
        });
     
      }
    )}
    else
    {
      this.ProductAPIService.GetAllProducts().subscribe(ProList=>{
        this.catProductList= ProList;
        this.catProductList.forEach(element => {
          element.url=this.San.bypassSecurityTrustUrl('data:image/png;base64,'+element.img)
        });
       // console.log( this.catProductList);
        })
    }
    /////
    // if(this.reciveSelectedcatId==0)
    // {
    //   this.catProductList=this.ProductList;
    // }
    // else
    // {
    //  this.catProductList= this.ProductList.filter(pro=> pro.CateogryID==this.reciveSelectedcatId)
    // }
  }

  ngOnInit(): void {

   this.ProductAPIService.GetAllProducts().subscribe(ProList=>{
    this.catProductList= ProList;
    this.catProductList.forEach(element => {
      element.url=this.San.bypassSecurityTrustUrl('data:image/png;base64,'+element.img)
    });
   // console.log( this.catProductList);
    })
  }
  // selectChange($event: Event)
  // {
  //   var id =parseInt(($event.target as HTMLInputElement).value);
  //   this.mySelect=this.ProductList.filter(p=>p.CateogryID == id)
  // }
  HideTable()
  {
    this.isImgShownTable=false;
    this.isImgShownDiv=true;
  }
  hiddenElement(index: number, item:Iproduct)
  {
    return item.id;
  }
  AddCartItem(id:number,Name:string,Price:number,TotalAmount:number, URL:SafeUrl)
  {
   // console.log("ID:"+id +"Name:"+Name+"selectedquantity:"+TotalAmount+"price:"+Price)
    this.pro={ID:id, Name:Name, selectedquantity:TotalAmount,price:Price, url:URL};
    //console.log("Product Component: "+this.pro.Name)

    //this.item.push(this.pro)
    console.log("Product Component Items: "+this.pro)

    //Event Handdler;
   // this.OnAddToCart.emit(this.item)
   this.CardItemDataService.changeCardItems(this.pro)
   this.CardItemDataService.AddItems(this.pro)
  }
  ProductDetails(id:number)
  {
    console.log("func:"+id);
    return this.router.navigate(['/Products', id]);
  }
}
