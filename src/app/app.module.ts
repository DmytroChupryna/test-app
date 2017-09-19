import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from "./app.routing";
import { MaterializeModule } from 'angular2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found-component/not-found-component.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { ProdItemComponent } from './prod-item/prod-item.component';
import {UppdateProductsService} from "./services/uppdate-products.service";
import { AddProductComponent } from './add-product/add-product.component';
import {elementClass} from "./services/elementClass.sevice";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailsComponent,
    ProdListComponent,
    ProdItemComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    UppdateProductsService,
    elementClass
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
