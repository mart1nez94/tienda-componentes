import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Module Main / Header Component -- Header de la pagina principal
import { HeaderComponent } from './main/header/header.component';
// Module Main / Footer Component -- Footer de la pagina principal
import { FooterComponent } from './main/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent
  },
  {
    path: '',
    component: FooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
