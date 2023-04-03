import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';

const AntModules: any[] = [
  NzButtonModule,
  NzMenuModule
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
