import { Component, Input } from '@angular/core';
import { Customer } from './customer';

@Component({
    selector: 'customer-detail',
    templateUrl: 'app/customer/customer.component.html'
})
export class CustomerComponent {
    @Input() customer: Customer;
}