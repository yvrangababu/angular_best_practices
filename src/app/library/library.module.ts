import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntDesignModule } from './ant-design/ant-design.module';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    AntDesignModule
  ],
  exports: [
    MaterialModule,
    AntDesignModule
  ]
})

export class LibraryModule { }
