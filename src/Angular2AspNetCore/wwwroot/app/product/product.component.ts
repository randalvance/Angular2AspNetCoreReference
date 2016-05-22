import { Component, Input } from '@angular/core';
import { OnActivate, Router, RouteSegment } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Product, ProductService } from './index';

@Component({
    selector: 'product-detail',
    templateUrl: 'app/product/product.component.html'
})
export class ProductComponent implements OnActivate {

    product: Product;

    constructor(private router: Router, private productService: ProductService) { }

    routerOnActivate(segment: RouteSegment) {
        let id = +segment.getParam("id");
        this.productService.getProduct(id).subscribe((product: Product) => {  this.product = product; });
    }

    goToProducts() {
        this.router.navigate(['/products']);
    }
}