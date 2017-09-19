import { NgModule } from '@angular/core';
import {addRouting} from "./add-product.routing";
import {CommonModule} from "@angular/common";

import {AddProductComponent} from "./add-product.component";
import {UppdateProductsService} from "../services/uppdate-products.service";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        AddProductComponent,
    ],
    imports: [
        CommonModule,
        addRouting,
        ReactiveFormsModule,
    ],
    providers: [
        UppdateProductsService
    ]
})
export class addModule { }
