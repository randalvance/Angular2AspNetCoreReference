import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { ProductModule } from './modules/product/product.module';
import { CustomerModule } from './modules/customer/customer.module';

import { HighlightDirective } from './directives/highlight';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './welcome.component';
import { PageNotFoundComponent } from './pagenotfound.component';

@NgModule({
    imports: [BrowserModule, routing, ProductModule, CustomerModule],
    declarations: [AppComponent, WelcomeComponent, PageNotFoundComponent, HighlightDirective],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }