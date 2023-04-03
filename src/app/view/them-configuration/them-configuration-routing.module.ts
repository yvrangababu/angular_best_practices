import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemConfigurationComponent } from './them-configuration.component';

const routes: Routes = [
  {
    path: '',
    component: ThemConfigurationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemConfigurationRoutingModule { }
