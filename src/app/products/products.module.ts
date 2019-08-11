import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Componentes del Modulo Products */
// Home Stock -- Informacion de los productos
import { StockComponent } from './stock/stock.component';

@NgModule({
  declarations: [StockComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
