import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface MenuItem {
  nombre: string;
  ruta?: string;
  icono: string;

  abierto?: boolean;

  submenu?: MenuItem[];

  roles: string[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menu: MenuItem[] = [];

  rolUsuario = '';

  menuCompleto: MenuItem[] = [
    {
      nombre: 'Dashboard',
      icono: '📊', // métricas
      ruta: '/dashboard',
      roles: ['ADMIN', 'USER'],
    },
    {
      nombre: 'Inventario',
      icono: '📦', // productos / stock
      ruta: '/inventario/list',
      roles: ['VEN'],
    },
    {
      nombre: 'Ventas',
      icono: '💰', // dinero / ventas
      abierto: false,
      roles: ['VEN'],
      submenu: [
        {
          nombre: 'Registro Ventas',
          ruta: '/venta/registro',
          icono: '🧾', // ticket
          roles: [ 'ENC'],
        },
        {
          nombre: 'Cortes de Caja',
          ruta: '/venta/corte-caja',
          icono: '💵', // cash flow
          roles: ['ENC'],
        },
        {
          nombre: 'Cotizaciones',
          ruta: '/venta/cotizaciones',
          icono: '📄', // documentos
          roles: ['ENC'],
        },
      ],
    },
    {
      nombre: 'Clientes',
      icono: '👥', // usuarios
      abierto: false,
      roles: [ 'ENC'],
      submenu: [
        {
          nombre: 'Registro Clientes',
          ruta: '/cliente/registro',
          icono: '🧑‍💼', // cliente
          roles: [ 'ENC'],
        },
        {
          nombre: 'Cuentas',
          ruta: '/cliente/cuentas',
          icono: '🏦', // finanzas
          roles: [ 'ENC'],
        },
      ],
    },
  
    {
      nombre: 'Entradas/Salidas',
      icono: '🔄', // flujo / movimiento
      abierto: false,
      roles: [ 'ENC'],
      submenu: [
        {
          nombre: 'Registro Entradas',
          ruta: '/entradas-salidas/entradas',
          icono: '📥', // entrada (inbound)
          roles: [ 'ENC'],
        },
        {
          nombre: 'Registro Salidas',
          ruta: '/entradas-salidas/salidas',
          icono: '📤', // salida (outbound)
          roles: [ 'ENC'],
        },
      ],
    },
    {
      nombre: 'Reportes',
      icono: '📊', // análisis / métricas
      abierto: false,
      roles: ['ADMIN', 'ENC'],
      submenu: [
        {
          nombre: 'Registros',
          ruta: '/reportes/list',
          icono: '📦', // stock
          roles: ['ADMIN', 'ENC'],
        },
        
      ],
    },
    {
      nombre: 'Utilidades',
      icono: '🛠️', // herramientas
      abierto: false,
      roles: ['ENC'],
      submenu: [
        {
          nombre: 'Reimpresión de Tickets',
          ruta: '/utilidades/reimpresion',
          icono: '🧾', // ticket
          roles: [ 'ENC'],
        },
        {
          nombre: 'Estados de Cuenta',
          ruta: '/utilidades/estados-cuenta',
          icono: '🏦', // finanzas
          roles: [ 'ENC'],
        },
       
      ],
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

    this.rolUsuario = usuario.rol;

    this.menu = this.menuCompleto.filter((item) =>
      item.roles.includes(this.rolUsuario),
    );
  }

 toggle(item: MenuItem) {

  // 🔒 cerrar todos
  this.menu.forEach(m => {
    if (m !== item) {
      m.abierto = false;
    }
  });

  // 🔁 toggle del actual
  if (item.submenu) {
    item.abierto = !item.abierto;
  }
}

navegar(ruta: string) {

  // 🔒 cerrar todos los submenus
  this.menu.forEach(m => m.abierto = false);

  this.router.navigate([ruta]);
}
}
