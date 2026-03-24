import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
stats = [

    {
      titulo: 'Eventos registrados',
      valor: 12
    },

    {
      titulo: 'Plantillas activas',
      valor: 8
    },

    {
      titulo: 'Notificaciones enviadas',
      valor: 1542
    }

  ];
}
