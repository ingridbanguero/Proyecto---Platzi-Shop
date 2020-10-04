import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // Componentes importados


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product.component';
import { CartComponent } from './cart/cart.component'; // Modulo importando

@NgModule({
  declarations: [ // Nuestros componentes
    AppComponent,
    ProductComponent,
    CartComponent // Agrego mi modulo creado (contiene las variables a usar)
  ],
  imports: [ // Nuestros modulos
    BrowserModule,
    AppRoutingModule,
    FormsModule // Modulo form importando
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
