import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Header Component -- Header de la pagina principal
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
