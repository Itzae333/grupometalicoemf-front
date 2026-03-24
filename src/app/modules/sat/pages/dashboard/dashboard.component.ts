import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
stats = [

    {
      titulo: 'Descargas realizadas',
      valor: 124
    },

    {
      titulo: 'Pendientes',
      valor: 8
    },

    {
      titulo: 'Errores',
      valor: 2
    },

    {
      titulo: 'Última descarga',
      valor: 'Hoy'
    }

  ];
}
