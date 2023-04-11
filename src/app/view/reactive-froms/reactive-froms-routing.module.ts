import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFromsComponent } from './reactive-froms.component';

const routes: Routes = [
  {
    path: '',
    component: ReactiveFromsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFromsRoutingModule { }
