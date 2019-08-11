import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Componentes del Modulo Login */
// Account Component -- Acceder al sistema
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ]
})
export class LoginModule { }
