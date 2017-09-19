import {Routes, RouterModule} from '@angular/router';
import {ProductDetailsComponent} from "../product-details/product-details.component";
import {NgModule, ModuleWithProviders} from '@angular/core';
import {ProductsComponent} from "./products.component";



const productsRoutes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: ProductsComponent
        },{
            path: ':item',
            component: ProductDetailsComponent
        }]
    },
];

export const productsRouting: ModuleWithProviders = RouterModule.forChild(productsRoutes);

