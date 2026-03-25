import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportesComponent } from './reportes.component';
import { SyncListComponent } from './pages/sync-list/sync-list.component';

const routes: Routes = [

  {
    path: '',
    component: ReportesComponent,

    children: [

      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },

      {
        path: 'list',
        component: SyncListComponent
      }

    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
