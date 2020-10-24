import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// Traemos cada uno de nuestros componentes creados
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { LayoutComponent} from './layout/layout.component'
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home', // Podemos poner tambien /home
        loadChildren: () => import ('./home/home.module').then(m => m.HomeModule)
        /* component: HomeComponent */
      },
      {
        path: 'products',
        loadChildren: () => import ('./products/products.module').then(m => m.ProductsModule)
        /* component: ProductsComponent */
      },
      {
        path: 'contact',
        loadChildren: () => import ('./contact/contact.module').then(m => m.ContactModule)
        /* component: ContactComponent */
      },
    ]
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
