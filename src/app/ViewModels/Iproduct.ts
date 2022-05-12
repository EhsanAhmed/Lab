import { SafeUrl } from "@angular/platform-browser"

export interface Iproduct {
    	id:number,
    	name:string
    	quantity:number,
    	price: number,
        img:string,
    	cateogryID:Number,
		catName:string,
        url:SafeUrl
}
