import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConciliacionRoutingModule } from './conciliacion-routing.module';
import { ConciliacionComponent } from './conciliacion.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GenerateFilesComponent } from './pages/generate-files/generate-files.component';
import { LayoutBuilderComponent } from './pages/layout-builder/layout-builder.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormGroup, FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ClientsComponent } from './pages/clients/clients.component';
import { ClientAccountsComponent } from './pages/client-accounts/client-accounts.component';


@NgModule({
  declarations: [
    ConciliacionComponent,
    DashboardComponent,
    GenerateFilesComponent,
    LayoutBuilderComponent,
    ClientsComponent,
    ClientAccountsComponent
  ],
  imports: [
    CommonModule,
    ConciliacionRoutingModule,
    FormsModule,
    SharedModule,
    DragDropModule
  ]
})
export class ConciliacionModule { }
