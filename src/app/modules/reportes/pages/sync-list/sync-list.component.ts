import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VentaSync } from 'src/app/core/models/sync.model';
import { SyncService } from 'src/app/core/services/sync.service';
import { SyncDetalleListComponent } from '../sync-detalle-list/sync-detalle-list.component';
import { SyncPayListComponent } from '../sync-pay-list/sync-pay-list.component';

@Component({
  selector: 'app-sync-list',
  templateUrl: './sync-list.component.html',
  styleUrls: ['./sync-list.component.scss'],
})
export class SyncListComponent implements OnInit {
 // 🔥 VIEW
  view: 'VENTAS' | 'CORTES' = 'VENTAS';

  // 🔥 DATA
  data: any[] = [];

  response: any = {
    page: 0,
    size: 10,
    totalPages: 0,
    totalElements: 0,
    hasNext: false,
    hasPrevious: false,
  };

  // 🔥 FILTROS
  filters: any = {
    page: 0,
    size: 10,
    busqueda: '',
    origen: '',
    estatus: '',
    fechaInicio: '',
    fechaFin: ''
  };

  constructor(
    private service: SyncService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.buscar();
  }

  // 🔥 CAMBIO DE VISTA
  cambiarVista(view: 'VENTAS' | 'CORTES') {
    this.view = view;
    this.filters.page = 0;
    this.buscar();
  }

  // 🔥 LOAD DINÁMICO
  loadPage(page: number) {
    this.filters.page = page;
    this.buscar();
  }

  changeSize(size: number) {
    this.filters.size = size;
    this.buscar();
  }

  buscar() {
    if (this.view === 'VENTAS') {
      this.loadVentas();
    } else {
      this.loadCortes();
    }
  }

  // =========================
  // 🔥 VENTAS
  // =========================
  loadVentas() {
    this.service.getVentas(this.filters).subscribe(res => {
      this.mapResponse(res);
    });
  }

  verDetalle(row: any) {
    this.dialog.open(SyncDetalleListComponent, {
      width: '800px',
      data: row.detalles || [],
      panelClass: 'custom-dialog',
    });
  }

  verPagos(row: any) {
    this.dialog.open(SyncPayListComponent, {
      width: '600px',
      data: row.pagos || [],
      panelClass: 'custom-dialog',
    });
  }

  // =========================
  // 🔥 CORTES
  // =========================
  loadCortes() {
    this.service.getCortes(this.filters).subscribe(res => {
      this.mapResponse(res);
    });
  }

  verVentas(row: any) {
    this.dialog.open(SyncDetalleListComponent, {
      width: '600px',
      data: row.ventas || [],
      panelClass: 'custom-dialog',
    });
  }

  // =========================
  // 🔥 UTIL
  // =========================
  private mapResponse(res: any) {
    this.data = res.content;

    this.response = {
      page: res.number,
      size: res.size,
      totalPages: res.totalPages,
      totalElements: res.totalElements,
      hasNext: !res.last,
      hasPrevious: !res.first,
    };
  }

}