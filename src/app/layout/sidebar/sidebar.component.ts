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
      roles: ['ADMIN', 'ENC', 'VEN'],
    },
    {
      nombre: 'Ventas',
      icono: '💰', // dinero / ventas
      abierto: false,
      roles: ['ADMIN', 'ENC', 'VEN'],
      submenu: [
        {
          nombre: 'Registro Ventas',
          ruta: '/venta/registro',
          icono: '🧾', // ticket
          roles: ['ADMIN', 'ENC'],
        },
        {
          nombre: 'Cortes de Caja',
          ruta: '/venta/corte-caja',
          icono: '💵', // cash flow
          roles: ['ADMIN', 'ENC'],
        },
        {
          nombre: 'Cotizaciones',
          ruta: '/venta/cotizaciones',
          icono: '📄', // documentos
          roles: ['ADMIN', 'ENC'],
        },
      ],
    },
    {
      nombre: 'Clientes',
      icono: '👥', // usuarios
      abierto: false,
      roles: ['ADMIN', 'ENC'],
      submenu: [
        {
          nombre: 'Registro Clientes',
          ruta: '/cliente/registro',
          icono: '🧑‍💼', // cliente
          roles: ['ADMIN', 'ENC'],
        },
        {
          nombre: 'Cuentas',
          ruta: '/cliente/cuentas',
          icono: '🏦', // finanzas
          roles: ['ADMIN', 'ENC'],
        },
      ],
    },
  
    {
      nombre: 'Entradas/Salidas',
      icono: '🔄', // flujo / movimiento
      abierto: false,
      roles: ['ADMIN', 'ENC'],
      submenu: [
        {
          nombre: 'Registro Entradas',
          ruta: '/entradas-salidas/entradas',
          icono: '📥', // entrada (inbound)
          roles: ['ADMIN', 'ENC'],
        },
        {
          nombre: 'Registro Salidas',
          ruta: '/entradas-salidas/salidas',
          icono: '📤', // salida (outbound)
          roles: ['ADMIN', 'ENC'],
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
          nombre: 'Inventario',
          ruta: '/reportes/inventario',
          icono: '📦', // stock
          roles: ['ADMIN', 'ENC'],
        },
        {
          nombre: 'Ventas',
          ruta: '/reportes/ventas',
          icono: '💰', // ingresos
          roles: ['ADMIN', 'ENC'],
        },
        {
          nombre: 'Movimientos',
          ruta: '/reportes/movimientos',
          icono: '🔄', // entradas/salidas
          roles: ['ADMIN', 'ENC'],
        },
        {
          nombre: 'Cuentas por Cobrar',
          ruta: '/reportes/cuentas-cobrar',
          icono: '📈', // dinero pendiente
          roles: ['ADMIN', 'ENC'],
        },
      ],
    },
    {
      nombre: 'Utilidades',
      icono: '🛠️', // herramientas
      abierto: false,
      roles: ['ADMIN', 'ENC'],
      submenu: [
        {
          nombre: 'Reimpresión de Tickets',
          ruta: '/utilidades/reimpresion',
          icono: '🧾', // ticket
          roles: ['ADMIN', 'ENC'],
        },
        {
          nombre: 'Estados de Cuenta',
          ruta: '/utilidades/estados-cuenta',
          icono: '🏦', // finanzas
          roles: ['ADMIN', 'ENC'],
        },
        {
          nombre: 'Ajustes de Inventario',
          ruta: '/utilidades/ajustes-inventario',
          icono: '⚙️', // configuración
          roles: ['ADMIN'],
        },
        {
          nombre: 'Historial de Movimientos',
          ruta: '/utilidades/historial',
          icono: '📜', // historial
          roles: ['ADMIN', 'ENC'],
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
