import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificacionesRoutingModule } from './notificaciones-routing.module';
import { NotificacionesComponent } from './notificaciones.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateNotificationComponent } from './pages/create-notification/create-notification.component';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [
    NotificacionesComponent,
    DashboardComponent,
    CreateNotificationComponent
  ],
  imports: [
    CommonModule,
    NotificacionesRoutingModule,
    MaterialModule
  ]
})
export class NotificacionesModule { }
