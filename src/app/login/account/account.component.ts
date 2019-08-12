import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
import { AuthenticationService } from './../../auth/authentication.service';
import { first } from 'rxjs/operators';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(protected _loginService: LoginService, private _authenticationService: AuthenticationService, private _router: Router) { }

  ngOnInit() {
  }

  ingresar(usuario: string, password: string) {
    this._loginService.getUsuario(usuario, password).subscribe(resultado => {
      if(resultado != null) {
        this._authenticationService.login(usuario, password).pipe(first()).subscribe(ingreso => {
          this._router.navigate(['']);
        });
      }
      else {
        console.log("error");
      }
    });
  }
}
