import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DetalleSync, PagoSync } from 'src/app/core/models/sync.model';
import { SyncDetalleListComponent } from '../sync-detalle-list/sync-detalle-list.component';

@Component({
  selector: 'app-sync-pay-list',
  templateUrl: './sync-pay-list.component.html',
  styleUrls: ['./sync-pay-list.component.scss']
})
export class SyncPayListComponent {
constructor(
    @Inject(MAT_DIALOG_DATA) public data: PagoSync[],
    private dialogRef: MatDialogRef<SyncPayListComponent>
  ) {}

  close() {
    this.dialogRef.close();
  }
}

