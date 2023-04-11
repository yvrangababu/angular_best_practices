import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';

const AntModules: any[] = [
  NzButtonModule,
  NzMenuModule,
  NzLayoutModule,
  NzBreadCrumbModule,
  NzLayoutModule,
  NzMenuModule,
  NzIconModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...AntModules
  ],
  exports: [
    ...AntModules
  ]
})
export class AntDesignModule { }
