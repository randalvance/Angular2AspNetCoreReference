import { Component, ViewChild } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome.component';
import { Customer, CustomerService, CustomerComponent, CustomerListComponent } from './customer/index';
import { Product, ProductService, ProductComponent, ProductListComponent } from './product/index';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS, CustomerService, ProductService]
})
@Routes([
    { path: '/', component: WelcomeComponent },
    { path: '/customers', component: CustomerListComponent },
    { path: '/customer/:id', component: CustomerComponent },
    { path: '/products', component: ProductListComponent },
    { path: '/product/:id', component: ProductComponent }
])
export class AppComponent {
}