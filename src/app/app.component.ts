import { Component } from '@angular/core';
import { CardItemDataService } from './Services/card-item-data.service';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent implements OnInit {
//   constructor(private ngxFavicon: AngularFaviconService) {}
export class AppComponent {
  constructor() {
   
  }
  ngOnInit() {
    // this.ngxFavicon.setFavicon("assets/icon.png");
    // OR 
  //  this.ngxFavicon.setFavicon(favicon_url, alt_favicon_url);

  
  }
}
