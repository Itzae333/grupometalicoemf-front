import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ModalService } from './core/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

 @ViewChild(ModalComponent) modal!:ModalComponent;

 constructor(private modalService:ModalService){}

 ngAfterViewInit(){

   this.modalService.register(this.modal);

 }


  
}
