import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductComponent } from './product.component';
import { ProductDetailGuard } from './product-guard.service';

const productRoutes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'product/:id', component: ProductComponent, canActivate: [ProductDetailGuard], canDeactivate: [ProductDetailGuard] }
];

export const productRouting = RouterModule.forChild(productRoutes);