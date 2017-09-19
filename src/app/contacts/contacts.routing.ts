import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ContactsComponent} from "./contacts.component";



const contactsRoutes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: ContactsComponent
        }]
    },
];

export const contactsRouting: ModuleWithProviders = RouterModule.forChild(contactsRoutes);

