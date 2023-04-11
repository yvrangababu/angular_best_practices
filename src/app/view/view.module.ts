import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { ThemConfigurationComponent } from './them-configuration/them-configuration.component';
import { LibraryModule } from '../library/library.module';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    ViewComponent,
    ThemConfigurationComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    LayoutModule,
    LibraryModule
  ]
})
export class ViewModule { }
