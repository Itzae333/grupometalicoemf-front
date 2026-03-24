import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConciliacionComponent } from './conciliacion.component';
import { LayoutBuilderComponent } from './pages/layout-builder/layout-builder.component';
import { GenerateFilesComponent } from './pages/generate-files/generate-files.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ClientAccountsComponent } from './pages/client-accounts/client-accounts.component';

const routes: Routes = [
  {
    path: '',
    component: ConciliacionComponent,

    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },

      {
        path: 'dashboard',
        component: DashboardComponent,
      },

      {
        path: 'create',
        component: LayoutBuilderComponent,
      },

      {
        path: 'list',
        component: GenerateFilesComponent,
      },
      {
        path: 'clients',
        component: ClientsComponent,
      },
      {
        path: 'client-accounts',
        component: ClientAccountsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConciliacionRoutingModule {}
