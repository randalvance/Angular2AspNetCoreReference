import { Component, Input } from '@angular/core';
import { Customer } from './customer';

@Component({
    selector: 'customer-detail',
    templateUrl: 'customer.component.html',
    moduleId: module.id
})
export class CustomerComponent {
    @Input() customer: Customer;
}