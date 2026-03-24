import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PaginatorComponent } from './components/paginator/paginator.component';
import { MaterialModule } from './material.module';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    PaginatorComponent
  ]
})
export class SharedModule {}