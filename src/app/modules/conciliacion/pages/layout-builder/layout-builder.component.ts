import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-layout-builder',
  templateUrl: './layout-builder.component.html',
  styleUrls: ['./layout-builder.component.scss'],
})
export class LayoutBuilderComponent {
  form: FormGroup;

  previewLines: string[] = [];
  lineLength: number = 0;

  mockData: any[] = [
    { account: '123456', amount: '450', date: '20250101' },
    { account: '654321', amount: '890', date: '20250101' },
    { account: '789456', amount: '210', date: '20250101' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      separator: [''],
      extension: ['txt'],

      fields: this.fb.array([]),
    });

    this.addFieldSample();
  }

  get fields(): FormArray {
    return this.form.get('fields') as FormArray;
  }

  addFieldSample() {
    this.fields.push(
      this.createField('account', 'account', 'STRING', 10, 'RIGHT', ' '),
    );
    this.fields.push(
      this.createField('amount', 'amount', 'NUMBER', 8, 'LEFT', '0'),
    );
    this.fields.push(this.createField('date', 'date', 'DATE', 8, 'RIGHT', ' '));

    this.generatePreview();
  }

  createField(
    name: any,
    source: any,
    type: any,
    len: any,
    padType: any,
    padChar: any,
  ) {
    return this.fb.group({
      fieldName: [name],
      sourceField: [source],
      dataType: [type],
      length: [len],
      paddingType: [padType],
      paddingCharacter: [padChar],
    });
  }

  addField() {
    this.fields.push(this.createField('', '', 'STRING', 10, 'RIGHT', ' '));

    this.generatePreview();
  }

  removeField(index: number) {
    this.fields.removeAt(index);

    this.generatePreview();
  }

  drop(event: any) {
    const dragEvent = event as CdkDragDrop<any[]>;

    const control = this.fields.at(dragEvent.previousIndex);

    this.fields.removeAt(dragEvent.previousIndex);
    this.fields.insert(dragEvent.currentIndex, control);

    this.generatePreview();
  }

  generatePreview() {
    const type = (this.form.value.extension || 'txt').toLowerCase();

    if (type === 'csv') {
      this.generateCsvPreview();
    } else if (type === 'xls' || type === 'xlsx') {
      this.generateXlsPreview();
    } else {
      this.generateTxtPreview();
    }
  }
  generateTxtPreview() {
    const separator = this.form.value.separator || '';

    const lines: string[] = [];

    this.mockData.forEach((record) => {
      let values: string[] = [];

      this.fields.value.forEach((field: any) => {
        let value = record[field.sourceField] || '';

        if (field.length) {
          const pad = field.paddingCharacter || ' ';

          if (field.paddingType === 'LEFT') {
            value = value.toString().padStart(field.length, pad);
          } else {
            value = value.toString().padEnd(field.length, pad);
          }
        }

        values.push(value);
      });

      let line = separator ? values.join(separator) : values.join('');

      lines.push(line);
    });

    this.previewLines = lines;
    this.lineLength = lines.length ? lines[0].length : 0;
  }

  generateCsvPreview() {
    const separator = ',';

    const lines: string[] = [];

    this.mockData.forEach((record) => {
      const values = this.fields.value.map((field: any) => {
        return record[field.sourceField] || '';
      });

      lines.push(values.join(separator));
    });

    this.previewLines = lines;
    this.lineLength = lines.length ? lines[0].length : 0;
  }
  save() {
    console.log(this.form.value);
  }

  generateXlsPreview() {

  // Para XLS realmente solo necesitamos saber cuántas filas hay
  // porque el preview se muestra como tabla en el HTML

  const lines: string[] = [];

  this.mockData.forEach(record => {

    const values = this.fields.value.map((field:any) => {
      return record[field.sourceField] || '';
    });

    lines.push(values.join(' | ')); // solo para info interna

  });

  this.previewLines = lines;
  this.lineLength = lines.length ? lines[0].length : 0;

}
}
