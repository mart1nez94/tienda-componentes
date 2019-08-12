import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiBase: string = 'http://localhost/tienda-componentes/api/index.php/api/account/';

  constructor(private _http: HttpClient) { }

  getUsuario(_usuario: string, _contraseña: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.apiBase + `usuario/${_usuario}/${_contraseña}`, { 
      headers 
    });
  }
}
