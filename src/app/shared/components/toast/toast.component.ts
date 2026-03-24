import { Component } from '@angular/core';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
toasts: any[] = [];

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {

    this.toastService.toast$.subscribe(toast => {

      this.toasts.push(toast);

      setTimeout(() => {

        this.toasts.shift();

      }, 3000);

    });

  }
}
