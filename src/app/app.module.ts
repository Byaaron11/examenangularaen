import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomecubosComponent } from './components/homecubos/homecubos.component';
import { MenuComponent } from './components/menu/menu.component';
import { MarcaComponent } from './components/marca/marca.component';
import { DetallecuboComponent } from './components/detallecubo/detallecubo.component';
import { SigninComponent } from './components/signin/signin.component';
import { PerfiluserComponent } from './components/perfiluser/perfiluser.component';
import { LoginComponent } from './components/login/login.component';
import { CarritoComponent } from './components/carrito/carrito.component';


@NgModule({
  declarations: [
    AppComponent,
    HomecubosComponent,
    MenuComponent,
    MarcaComponent,
    DetallecuboComponent,
    SigninComponent,
    PerfiluserComponent,
    LoginComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
