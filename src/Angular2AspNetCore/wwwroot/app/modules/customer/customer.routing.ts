import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list.component';
import { CustomerComponent } from './customer.component';

const productRoutes: Routes = [
    { path: 'customers', component: CustomerListComponent },
    { path: 'customer/:id', component: CustomerComponent }
];

export const customerRouting = RouterModule.forChild(productRoutes);