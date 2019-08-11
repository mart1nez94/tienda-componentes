import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiBase: string = 'http://localhost/tienda-componentes/api/index.php/api/productos/';

  constructor(private _http: HttpClient) { }

  getStock(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.apiBase + `stock`, { 
      headers 
    });
  }
}
