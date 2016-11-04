import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'product-list',
    templateUrl: 'product-list.component.html',
    moduleId: module.id
})
export class ProductListComponent implements OnInit {
    products: Observable<Product[]>;
    filterBy: string; 

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.products = this.productService.getProducts();
    }

    onRatingClicked(payload: string) {
        alert(payload);
    }
}