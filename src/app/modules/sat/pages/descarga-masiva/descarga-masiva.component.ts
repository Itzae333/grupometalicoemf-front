import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResponseModel } from 'src/app/core/models/response.model';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { CreateRequestModalComponent } from '../components/create-request-modal/create-request-modal.component';

@Component({
  selector: 'app-descarga-masiva',
  templateUrl: './descarga-masiva.component.html',
  styleUrls: ['./descarga-masiva.component.scss'],
})
export class DescargaMasivaComponent {
  loading = false;
  // paginación
  page = 0;
  size = 10;

  // response del backend
  response!: ResponseModel<any>;
  data = [
    {
      uuidBulkSat: 'REQ-983743',
      requesterRfc: 'AAA010101AAA',
      startDate: '2024-01-01',
      endDate: '2024-01-31',
      requestType: 'CFDI',
      status: 'PENDING',
    },

    {
      uuidBulkSat: 'REQ-983744',
      requesterRfc: 'AAA010101AAA',
      startDate: '2024-02-01',
      endDate: '2024-02-28',
      requestType: 'METADATA',
      status: 'FINISHED',
    },
  ];

  constructor(
    private loader: LoaderService,
    private toast: ToastService,
    private modal: ModalService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.loadData();
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateRequestModalComponent, {
      width: '650px',
      panelClass: 'bulk-modal',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Nueva solicitud', result);
      }
    });
  }

  consult(row: any) {
    this.loader.show();

    setTimeout(() => {
      this.loader.hide();

      this.toast.show('Estado actualizado', 'success');
    }, 2000);
  }

  download(row: any) {
    this.loader.show();

    setTimeout(() => {
      this.loader.hide();

      this.toast.show('Descargando archivo ZIP', 'success');
      this.modal.confirm('El usuario fue creado', 'Usuario registrado');
    }, 2000);
  }

  // cargar datos (dummy por ahora)
  loadData() {
    const totalElements = this.data.length;
    const totalPages = Math.ceil(totalElements / this.size);

    this.response = {
      code: 200,
      date: new Date(),
      message: 'OK',
      idThread: 1,
      data: this.data,
      page: this.page,
      size: this.size,
      totalElements: totalElements,
      totalPages: totalPages,
      hasNext: this.page < totalPages - 1,
      hasPrevious: this.page > 0,
    };
  }

  loadPage(page: number) {
    this.page = page;

    this.loadData();
  }

  changeSize(size: number) {
    this.size = size;

    this.page = 0;

    this.loadData();
  }
}
