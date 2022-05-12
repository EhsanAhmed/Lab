import { SafeUrl } from "@angular/platform-browser";

export interface IshoppingCartItem
{
     ID:number,
     Name:string,
     price:number,
     selectedquantity:number,
     url:SafeUrl
}