import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../products.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  stock: Array<any>;

  constructor(protected _productsService: ProductsService,) { }

  ngOnInit() {
    this.obtenerStock();
  }

  obtenerStock(): void {
    this._productsService.getStock().subscribe(resultado => {
      this.stock = resultado;
    });
  }
}
