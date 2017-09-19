import { NgModule } from '@angular/core';
import {contactsRouting} from "./contacts.routing";
import {CommonModule} from "@angular/common";

import {ContactsComponent} from "./contacts.component";



@NgModule({
    declarations: [
        ContactsComponent,
    ],
    imports: [
        CommonModule,
        contactsRouting,
    ],

})
export class contactsModule { }
