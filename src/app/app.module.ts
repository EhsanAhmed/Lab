import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductsComponent } from './Components/products/products.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SideMnueComponent } from './Components/side-mnue/side-mnue.component';
import { FormsModule } from '@angular/forms';
import { ProductStyleDirective } from './Directive/product-style.directive';
import { BirthYearPipe } from './Pipes/birth-year.pipe';
import { CardFormatPipe } from './Pipes/card-format.pipe';
import { CartParentComponent } from './Components/cart-parent/cart-parent.component';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUSComponent } from './Components/contact-us/contact-us.component';
import { DefinationComponent } from './Components/defination/defination.component';
import { RegisterationComponent } from './Components/registeration/registeration.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { MainLayOutComponent } from './Components/main-lay-out/main-lay-out.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBodyComponent } from './Components/dialog-body/dialog-body.component';
import { CardItemsComponent } from './Components/card-items/card-items.component';
// import { Component, OnInit } from '@angular/core';
// import { AngularFaviconService } from 'angular-favicon';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    SideMnueComponent,
    ProductStyleDirective,
    BirthYearPipe,
    CardFormatPipe,
    CartParentComponent,
    HomeComponent,
    NotFoundPageComponent,
    ProductDetailsComponent,
    AboutUsComponent,
    ContactUSComponent,
    DefinationComponent,
    RegisterationComponent,
    LogInComponent,
    MainLayOutComponent,
    DialogBodyComponent,
    DialogBodyComponent,
    CardItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
