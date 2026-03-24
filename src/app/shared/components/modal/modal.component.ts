import { Component } from '@angular/core';
export type ModalType =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'confirm'
  | 'delete'
  | 'form';

export interface ModalConfig {

  type: ModalType;

  title?: string;

  message?: string;

  confirmText?: string;

  cancelText?: string;

  loading?: boolean;

}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  visible = false;

  config!: ModalConfig;

  resolve!: (value:boolean)=>void;

  loading = false;

  open(config:ModalConfig):Promise<boolean>{

    this.config = config;

    this.visible = true;

    this.loading = false;

    return new Promise<boolean>((res)=>{

      this.resolve = res;

    });

  }

  confirm(){

    if(this.config.loading){

      this.loading = true;

    }

    this.visible = false;

    this.resolve(true);

  }

  cancel(){

    this.visible = false;

    this.resolve(false);

  }


}
