import { NgModule } from '@angular/core';
import {productsRouting} from "./products.routing";
import {CommonModule} from "@angular/common";

import {ProductsComponent} from "./products.component";
import { ProductDetailsComponent } from '../product-details/product-details.component';
import {ProdItemComponent} from "../prod-item/prod-item.component";
import {ProdListComponent} from "../prod-list/prod-list.component";
import {UppdateProductsService} from "../services/uppdate-products.service";



@NgModule({
    declarations: [
        ProdListComponent,
        ProdItemComponent,
        ProductsComponent,
        ProductDetailsComponent
    ],
    imports: [
        CommonModule,
        productsRouting,
    ],
    providers: [
        UppdateProductsService
    ],
})
export class ProductsModule { }
