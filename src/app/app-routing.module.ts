import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Module Main / Header Component -- Header de la pagina principal
import { HeaderComponent } from './main/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
