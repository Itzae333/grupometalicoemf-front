import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SatRoutingModule } from './sat-routing.module';
import { SatComponent } from './sat.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DescargaMasivaComponent } from './pages/descarga-masiva/descarga-masiva.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateRequestModalComponent } from './pages/components/create-request-modal/create-request-modal.component';


@NgModule({
  declarations: [
    SatComponent,
    DashboardComponent,
    DescargaMasivaComponent,
    CreateRequestModalComponent
  ],
  imports: [
    CommonModule,
    SatRoutingModule,
    FormsModule,
    MaterialModule,
    SharedModule
  ]
})
export class SatModule { }
