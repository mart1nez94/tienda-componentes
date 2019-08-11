import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Modulos del Proyecto*/
// Module Main -- Modulo para la pagina principal
import { MainModule } from './main/main.module';
// Module HomePage -- Modulo para mostrar informacion en la pagina principal
import { HomepageModule } from './homepage/homepage.module';
// Module Productos -- Modulo para mostrar productos e informacion de cada producto
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainModule,
    HomepageModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
