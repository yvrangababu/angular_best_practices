import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFromsRoutingModule } from './reactive-froms-routing.module';
import { ReactiveFromsComponent } from './reactive-froms.component';


@NgModule({
  declarations: [
    ReactiveFromsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFromsRoutingModule
  ]
})
export class ReactiveFromsModule { }
