import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificacionesComponent } from './notificaciones.component';
import { DashboardComponent } from '../notificaciones/pages/dashboard/dashboard.component';
import { CreateNotificationComponent } from './pages/create-notification/create-notification.component';

const routes: Routes = [

  {
    path: '',
    component: NotificacionesComponent,

    children: [

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },

      {
        path: 'dashboard',
        component: DashboardComponent
      },

      {
        path: 'create',
        component: CreateNotificationComponent
      }

    ]

  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificacionesRoutingModule { }
