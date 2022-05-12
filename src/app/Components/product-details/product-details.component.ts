import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductAPIServiceService } from 'src/app/Services/product-apiservice.service';
import { ProductsService } from 'src/app/Services/products.service';
import { Iproduct } from 'src/app/ViewModels/Iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  currentProductID:number=0;
  productIDList:number[]=[];
  product:Iproduct|undefined=undefined;
  constructor(private activatedRoute:ActivatedRoute,
    //private ProService:ProductsService,
    private San:DomSanitizer,
    private proAPIService: ProductAPIServiceService,
    private location:Location, private router:Router) {

   }

  ngOnInit(): void {
    // this.productIDList=this.ProService.getPrdIDsList();
    // this.currentProductID=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    ///////
    //    this.activatedRoute.paramMap.subscribe(paramMap=>{
    //     this.currentProductID=Number(paramMap.get("pid"));
    //     this.product=this.ProService.getProductByID(this.currentProductID);
    //   });
    // this.product=this.ProService.getProductByID(this.currentProductID)

    this.currentProductID=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    this.proAPIService.getProductByID(this.currentProductID).subscribe(p=>{
      this.product=p;
      this.product.url=this.San.bypassSecurityTrustUrl('data:image/png;base64,'+this.product.img)

      console.log(this.product);
    });
  }
  goBack()
  {
    this.location.back();
  }
  prevProduct()
  {
    console.log("pre");
    let currIndex=this.productIDList.findIndex((val)=>val==this.currentProductID);
    if(currIndex!=0)
    {
      this.currentProductID=this.productIDList[currIndex-1];
      this.router.navigate(['/Products', this.currentProductID]);
    }
  }
  nextProduct()
  {
    console.log("next");

    let currIndex=this.productIDList.findIndex((val)=>val==this.currentProductID);
    if(currIndex<this.productIDList.length-1)
    {
      this.currentProductID=this.productIDList[currIndex+1];
      this.router.navigate(['/Products', this.currentProductID]);
    }
  }
  isFirstItem():boolean
  {
    return this.currentProductID==this.productIDList[0];
  }

  islastItem():boolean
  {
    return this.currentProductID==this.productIDList[this.productIDList.length-1];
  }

}
