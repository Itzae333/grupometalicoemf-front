import { Injectable } from '@angular/core';

import { ModalComponent, ModalConfig } from
'src/app/shared/components/modal/modal.component';

@Injectable({ providedIn: 'root' })

export class ModalService {

  private modal!: ModalComponent;

  register(modal: ModalComponent) {
    this.modal = modal;
  }

  open(config: ModalConfig) {
    return this.modal.open(config);
  }

  success(message: string, title: string = 'Éxito') {
    return this.open({
      type: 'success',
      title,
      message
    });
  }

  error(message: string, title: string = 'Error') {
    return this.open({
      type: 'error',
      title,
      message
    });
  }

  info(message: string, title: string = 'Información') {
    return this.open({
      type: 'info',
      title,
      message
    });
  }

  warning(message: string, title: string = 'Advertencia') {
    return this.open({
      type: 'warning',
      title,
      message
    });
  }

  confirm(message: string, title: string = 'Confirmar') {
    return this.open({
      type: 'confirm',
      title,
      message,
      confirmText: 'Aceptar',
      cancelText: 'Cancelar'
    });
  }

  delete(message: string, title: string = 'Eliminar registro') {
    return this.open({
      type: 'delete',
      title,
      message,
      confirmText: 'Eliminar',
      cancelText: 'Cancelar'
    });
  }

}