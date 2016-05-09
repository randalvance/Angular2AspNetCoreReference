import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Product, ProductService, ProductComponent } from './index';

@Component({
    selector: 'product-list',
    templateUrl: 'app/product/product-list.component.html',
    directives: [ROUTER_DIRECTIVES, ProductComponent]
})
export class ProductListComponent implements OnInit {
    products: Observable<Product>;

    constructor(private _productService: ProductService) { }

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this.products = this._productService.getProducts();
    }
}