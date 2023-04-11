import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view.component';

const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home-routing.module').then(m => m.HomeRoutingModule)
      },
      {
        path: 'theme-configuration',
        loadChildren: () => import('./them-configuration/them-configuration.module').then(m => m.ThemConfigurationModule)
      },
      {
        path: 'lazy-loading',
        loadChildren: () => import('./lazy-loading/lazy-loading-routing.module').then(m => m.LazyLoadingRoutingModule)
      },
      {
        path: 'reactive-forms',
        loadChildren: () => import('./reactive-froms/reactive-froms-routing.module').then(m => m.ReactiveFromsRoutingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
