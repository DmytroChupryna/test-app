import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AddProductComponent} from "./add-product.component";



const addRoutes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: AddProductComponent
        }]
    },
];

export const addRouting: ModuleWithProviders = RouterModule.forChild(addRoutes);

