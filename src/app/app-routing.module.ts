import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Module Main / Header Component -- Header de la pagina principal
import { HeaderComponent } from './main/header/header.component';
// Module Main / Footer Component -- Footer de la pagina principal
import { FooterComponent } from './main/footer/footer.component';
// Module Homepage / Home Component -- Informacion de la pagina principal
import { HomeComponent } from './homepage/home/home.component';
// Module Products / Stock Component -- Informacion de todos los productos en el sistema
import { StockComponent } from './products/stock/stock.component';
// Module Login / Account Component -- Acceder al sistema
import { AccountComponent } from './login/account/account.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: '',
            component: FooterComponent
          }
        ]
      },
      {
        path: 'productos',
        component: StockComponent,
        children: [
          {
            path: '',
            component: FooterComponent
          }
        ]
      },
      {
        path: 'sesion',
        component: AccountComponent,
        children: [
          {
            path: '',
            component: FooterComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
