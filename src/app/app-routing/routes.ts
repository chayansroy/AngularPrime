import { Routes } from '@angular/router';
import { AppLoginComponent } from '../app-login/app-login.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
    { path: 'applogin', component: AppLoginComponent },
    { path: 'home', component: HomeComponent }
];
