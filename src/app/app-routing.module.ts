import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CardItemsComponent } from './Components/card-items/card-items.component';
import { CartParentComponent } from './Components/cart-parent/cart-parent.component';
import { ContactUSComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { MainLayOutComponent } from './Components/main-lay-out/main-lay-out.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { RegisterationComponent } from './Components/registeration/registeration.component';

const routes: Routes = [
    {path: '', component:MainLayOutComponent, children: [
    {path:'', redirectTo:'/Home', pathMatch:'full'},
    {path:'Home', component:HomeComponent},
    {path:'CardItems', component:CardItemsComponent},
    {path:'about us', component:AboutUsComponent},
    {path:'contact us', component:ContactUSComponent},
    {path:'Products/:pid', component:ProductDetailsComponent},
    {path:'Order', component:CartParentComponent},
  ]},
  {path:'login',component:LogInComponent},
  {path:'registeration',component:RegisterationComponent},
  {path:'**', component:NotFoundPageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
