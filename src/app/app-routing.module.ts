import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// Traemos cada uno de nuestros componentes creados
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent} from './product-detail/product-detail.component';
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
        component: ProductsComponent
      },
      {
        path: 'products/:id', // Mando mi parametro dinamico
        component: ProductDetailComponent
      },
      {
        path: 'contact',
        component: ContactComponent
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
