import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app.routing";
import { MaterializeModule } from 'angular2-materialize';
import { ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found-component/not-found-component.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {UppdateProductsService} from "./services/uppdate-products.service";



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
  ],
  providers: [
    UppdateProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
