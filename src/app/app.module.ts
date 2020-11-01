import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Componentes importados

import { SharedModule} from './shared/shared.module'
import { CoreModule} from './core/core.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ // Nuestros componentes
    AppComponent,
    CartComponent,
    PageNotFoundComponent,
    LayoutComponent // Agrego mi modulo creado (contiene las variables a usar)
  ],
  imports: [ // Nuestros modulos
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Modulo form importando
    SharedModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
