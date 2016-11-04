import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './product-list.component';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';
import { ProductFilterPipe } from './product-filter.pipe';
import { productRouting } from './product.routing';

import { ProductDetailGuard } from'./product-guard.service';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        HttpModule,
        SharedModule,
        productRouting
    ],
    declarations: [
        ProductListComponent,
        ProductComponent,
        ProductFilterPipe
    ],
    providers: [ProductService, ProductDetailGuard]
})
export class ProductModule { }