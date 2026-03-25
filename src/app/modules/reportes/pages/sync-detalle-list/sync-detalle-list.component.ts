import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DetalleSync, PagoSync } from 'src/app/core/models/sync.model';

@Component({
  selector: 'app-sync-detalle-list',
  templateUrl: './sync-detalle-list.component.html',
  styleUrls: ['./sync-detalle-list.component.scss']
})
export class SyncDetalleListComponent {
constructor(
    @Inject(MAT_DIALOG_DATA) public data: DetalleSync[],
    private dialogRef: MatDialogRef<SyncDetalleListComponent>
  ) {}
close() {
    this.dialogRef.close();
  }
}
