import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalDashboardComponent } from './dashboard/portal-dashboard/portal-dashboard.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  // ===== LOGIN (PRIMERA PANTALLA) =====
  {
    path: '',
    loadChildren: () =>
      import('./core/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: PortalDashboardComponent,
      },

      {
        path: 'conciliacion',
        loadChildren: () =>
          import('./modules/conciliacion/conciliacion.module').then(
            (m) => m.ConciliacionModule,
          ),
      },

      {
        path: 'sat',
        loadChildren: () =>
          import('./modules/sat/sat.module').then((m) => m.SatModule),
      },

      {
        path: 'reportes',
        loadChildren: () =>
          import('./modules/reportes/reportes.module').then(
            (m) => m.ReportesModule,
          ),
      },

      {
        path: 'bitacora',
        loadChildren: () =>
          import('./modules/bitacora/bitacora.module').then(
            (m) => m.BitacoraModule,
          ),
      },

      {
        path: 'notificaciones',
        loadChildren: () =>
          import('./modules/notificaciones/notificaciones.module').then(
            (m) => m.NotificacionesModule,
          ),
      },
      {
        path: 'cliente',
        loadChildren: () =>
          import('./modules/cliente/cliente.module').then(
            (m) => m.ClienteModule,
          ),
      },

      {
        path: 'venta',
        loadChildren: () =>
          import('./modules/venta/venta.module').then((m) => m.VentaModule),
      },

      {
        path: 'inventario',
        loadChildren: () =>
          import('./modules/inventario/inventario.module').then(
            (m) => m.InventarioModule,
          ),
      },
    ],
  },
  // ===== SI LA URL NO EXISTE =====
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
