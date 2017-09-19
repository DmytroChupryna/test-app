import {NgModule, ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { NotFoundComponent } from './not-found-component/not-found-component.component';
import {HomeComponent} from "./home/home.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {AddProductComponent} from "./add-product/add-product.component";


const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'products/:item', component: ProductDetailsComponent},
  { path: 'addProduct', component: AddProductComponent},
  { path: '**', component: NotFoundComponent},
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
