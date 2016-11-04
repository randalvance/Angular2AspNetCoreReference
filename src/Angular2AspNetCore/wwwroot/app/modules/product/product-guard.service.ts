import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ProductComponent } from './product.component';

@Injectable()
export class ProductDetailGuard implements CanActivate, CanDeactivate<ProductComponent> {
    constructor(private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path; // route has 2 segments product and id, we retrieve the second one
        if (isNaN(id) || id < 1) {
            alert('Invalid product Id');
            this.router.navigate(['/products']);
            return false;
        }
        return true;
    }

    canDeactivate(target: ProductComponent): boolean {
        if (target.hasChanges()) {
            return confirm('Changes will be lost. Continue?');
        }

        return true;
    }
}