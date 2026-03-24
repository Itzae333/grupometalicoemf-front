import { Component } from '@angular/core';

@Component({
  selector: 'app-generate-files',
  templateUrl: './generate-files.component.html',
  styleUrls: ['./generate-files.component.scss']
})
export class GenerateFilesComponent {
 data = [
    {
      id: 'TXT-0001',
      layout: 'AMEX_LAYOUT',
      createdAt: '2026-03-08',
      records: 45,
      status: 'FINISHED'
    },
    {
      id: 'TXT-0002',
      layout: 'VISA_LAYOUT',
      createdAt: '2026-03-09',
      records: 12,
      status: 'PENDING'
    }
  ];

  download(row:any){
    console.log("download file",row);
  }
}
