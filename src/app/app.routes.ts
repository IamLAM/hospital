import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

const APP_ROUTES: Routes = [

{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: '**', component: NopagefoundComponent }
];


export const EAPP_ROUTES = RouterModule.forRoot(APP_ROUTES, { useHash: true } );

