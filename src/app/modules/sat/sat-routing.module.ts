import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SatComponent } from './sat.component';

import { DescargaMasivaComponent } from './pages/descarga-masiva/descarga-masiva.component';
import { DashboardComponent } from '../sat/pages/dashboard/dashboard.component';

const routes: Routes = [

  {
    path: '',
    component: SatComponent,

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
        path: 'descarga-masiva',
        component: DescargaMasivaComponent
      }

    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SatRoutingModule {}