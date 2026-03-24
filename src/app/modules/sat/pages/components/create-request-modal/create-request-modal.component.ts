import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-request-modal',
  templateUrl: './create-request-modal.component.html',
  styleUrls: ['./create-request-modal.component.scss']
})
export class CreateRequestModalComponent {
form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateRequestModalComponent>
  ) {

    this.form = this.fb.group({
      rfc:['',[Validators.required]],
      type:['CFDI'],
      startDate:['',Validators.required],
      endDate:['',Validators.required]
    });

  }

  create(){

    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }

    this.dialogRef.close(this.form.value);

  }
}
