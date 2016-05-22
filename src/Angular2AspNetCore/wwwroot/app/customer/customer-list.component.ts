import { Component, EventEmitter, Output, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';
import { Customer } from './customer';

@Component({
    selector: 'customer-list',
    templateUrl: 'app/customer/customer-list.component.html',
    directives: [CustomerComponent]
})
export class CustomerListComponent implements OnInit {
    constructor(private _customerService: CustomerService) { }
    
    @Output() changed = new EventEmitter<Customer>();
    selectedCustomer: Customer;
    selectedID: number;

    customers: Observable<Customer>;

    ngOnInit() {
        this.getCustomers();
    }

    getCustomers() {
        this.customers = this._customerService.getCustomers();
    }

    select(customer: Customer) {
        this.selectedCustomer = customer;
        this.changed.emit(customer);
    }

    highlightCustomer(customer: Customer) {
        this.selectedID = customer.id;
    }
}

