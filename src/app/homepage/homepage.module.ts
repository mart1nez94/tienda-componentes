import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ]
})
export class HomepageModule { }
