import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const appRoutes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);