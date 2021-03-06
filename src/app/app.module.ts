import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// rutas
import { EAPP_ROUTES } from './app.routes';
// pages
import { PagesModule } from './pages/pages.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,


  ],
  imports: [
    BrowserModule, EAPP_ROUTES, PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
