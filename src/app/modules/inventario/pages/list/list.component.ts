import { Component } from '@angular/core';
import { ResponseModel } from 'src/app/core/models/response.model';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
page = 0;
  size = 10;

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
      private modal: ModalService
    ) {}
  
    ngOnInit() {
      this.loadData();
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

   
  }

  changeSize(size: number) {
    this.size = size;

    this.page = 0;
 
  }
}
