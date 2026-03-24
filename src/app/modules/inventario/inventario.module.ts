import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioComponent } from './inventario.component';
import { ListComponent } from './pages/list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InventarioComponent, ListComponent],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    FormsModule,
    MaterialModule,
    SharedModule,
  ],
})
export class InventarioModule {}
