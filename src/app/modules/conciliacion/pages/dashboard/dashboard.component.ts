import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
 stats = [

    {
      titulo: "Layouts configurados",
      valor: 4
    },

    {
      titulo: "Archivos generados hoy",
      valor: 12
    },

    {
      titulo: "Registros procesados",
      valor: 384
    },

    {
      titulo: "Errores",
      valor: 0
    }

  ];
}
