import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Componentes del Modulo Login */
// Account Component -- Acceder al sistema
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
