import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CustomerListComponent } from './customer-list.component';
import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';

import { customerRouting } from './customer.routing';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        HttpModule,
        customerRouting
    ],
    declarations: [
        CustomerListComponent,
        CustomerComponent
    ],
    providers: [CustomerService]
})
export class CustomerModule { }