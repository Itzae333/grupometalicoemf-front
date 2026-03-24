import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

export interface CreateNotificationEventRequest {
  eventKey: string;
  description: string;
  templates: TemplateRequest[];
}

export interface TemplateRequest {
  channel: 'EMAIL' | 'SMS' | 'IN_APP';

  subject: string;

  htmlContent: string;

  senderEmail: string;

  active: boolean;

  parameters: ParameterRequest[];
}

export interface ParameterRequest {
  paramKey: string;

  type: 'STRING' | 'MONEY' | 'NUMBER' | 'DATE' | 'DATETIME' | 'BOOLEAN' | 'URL';

  required: boolean;

  defaultValue?: string;
}

@Component({
  selector: 'app-create-notification',
  templateUrl: './create-notification.component.html',
  styleUrls: ['./create-notification.component.scss'],
})
export class CreateNotificationComponent {
  channels = ['EMAIL', 'SMS', 'IN_APP'];

  paramTypes = [
    'STRING',
    'MONEY',
    'NUMBER',
    'DATE',
    'DATETIME',
    'BOOLEAN',
    'URL',
  ];

  previewHtml = '';

  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    eventKey: ['', Validators.required],

    description: ['', Validators.required],

    templates: this.fb.array([]),
  });

  get templates(): FormArray {
    return this.form.get('templates') as FormArray;
  }

  addTemplate() {
    const template = this.fb.group({
      channel: ['EMAIL'],

      subject: ['', Validators.required],

      senderEmail: [''],

      htmlContent: ['', Validators.required],

      active: [true],

      parameters: this.fb.array([]),
    });

    this.templates.push(template);
  }

  addParameter(templateIndex: number) {
    const params = this.templates
      .at(templateIndex)
      .get('parameters') as FormArray;

    params.push(
      this.fb.group({
        paramKey: ['', Validators.required],
        type: ['STRING'],
        required: [false],
        defaultValue: [''],
      }),
    );
  }

  updatePreview(index: number) {
    const html = this.templates.at(index).get('htmlContent')?.value;

    this.previewHtml = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body>
${html}
</body>
</html>
`;

  }

  save() {
    console.log(this.form.value);
  }
  removeTemplate(index: number) {
    this.templates.removeAt(index);
  }

  removeParameter(templateIndex: number, paramIndex: number) {
    const params = this.getParameters(templateIndex);
    params.removeAt(paramIndex);
  }

  getParameters(templateIndex: number): FormArray {
    return this.templates.at(templateIndex).get('parameters') as FormArray;
  }


}
