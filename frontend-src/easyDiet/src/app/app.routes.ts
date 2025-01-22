import { Routes } from '@angular/router';
import { DietHomeComponent } from './private/diet.home/diet.home.component';
import { LoginComponent } from './public/login/login.component';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'diet', component: DietHomeComponent}
];
