import { Component } from '@angular/core';

@Component({
  selector: 'app-portal-dashboard',
  templateUrl: './portal-dashboard.component.html',
  styleUrls: ['./portal-dashboard.component.scss']
})
export class PortalDashboardComponent {

  clientes = [
  { nombre: 'Cliente A', total: 50000 },
  { nombre: 'Cliente B', total: 30000 },
  { nombre: 'Cliente C', total: 20000 }
];

producto = {
  nombre: 'Laptop HP ProBook',
  cantidad: 120
};

}
