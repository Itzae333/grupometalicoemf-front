import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { ReportesComponent } from './reportes.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SyncListComponent } from './pages/sync-list/sync-list.component';
import { SyncPayListComponent } from './pages/sync-pay-list/sync-pay-list.component';
import { SyncDetalleListComponent } from './pages/sync-detalle-list/sync-detalle-list.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ReportesComponent,
    DashboardComponent,
    SyncListComponent,
    SyncPayListComponent,
    SyncDetalleListComponent
  ],
  imports: [
    CommonModule,MaterialModule,
        SharedModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
