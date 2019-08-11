import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Componentes del Modulo Products */
// Stock Component -- Informacion de todos los productos en el sistema
import { StockComponent } from './stock/stock.component';

@NgModule({
  declarations: [StockComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ]
})
export class ProductsModule { }
