import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appProductStyle]'
})
export class ProductStyleDirective {
  @Input('appProductStyle') BGColor :string="blue";
  constructor(private elemRef: ElementRef) 
  {
    elemRef.nativeElement.style.border=`2px black solid`;
    elemRef.nativeElement.style.boxShadow = "5px 10px 15px blue"

  }
  
  @HostListener('mouseenter') onMouseEnter()
  {
    this.elemRef.nativeElement.style.boxShadow = `5px 10px 15px ${this.BGColor}`

  }

  @HostListener('mouseout') onMouseOut()
  {
    this.elemRef.nativeElement.style.boxShadow = `10px 20px 30px ${this.BGColor}`

  }
}
