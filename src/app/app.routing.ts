import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { NotFoundComponent } from './not-found-component/not-found-component.component';
import {HomeComponent} from "./home/home.component";


const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'products', loadChildren: 'app/products/products.module#ProductsModule'},
  { path: 'contacts', loadChildren: 'app/contacts/contacts.module#contactsModule'},
  { path: 'addProduct', loadChildren: 'app/add-product/add-product.module#addModule'},
  { path: '**', component: NotFoundComponent},
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
