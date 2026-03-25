import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() page = 0;
  @Input() size = 10;

  @Input() totalPages = 0;
  @Input() totalElements = 0;

  @Input() hasNext = false;
  @Input() hasPrevious = false;

  @Output() pageChange = new EventEmitter<number>();
  @Output() sizeChange = new EventEmitter<number>();

  sizes = [10, 20, 50, 100];

  changePage(page: number) {
    if (page < 0 || page >= this.totalPages) return;

    this.pageChange.emit(page);
  }

  changeSize(size: number) {
    this.sizeChange.emit(size);
  }

  next() {
    if (this.hasNext) this.pageChange.emit(this.page + 1);
  }

  prev() {
    if (this.hasPrevious) this.pageChange.emit(this.page - 1);
  }

  get pages(): (number | string)[] {
    const pages: (number | string)[] = [];

    if (this.totalPages <= 7) {
      for (let i = 0; i < this.totalPages; i++) {
        pages.push(i);
      }

      return pages;
    }

    pages.push(0);

    if (this.page > 3) {
      pages.push('...');
    }

    const start = Math.max(1, this.page - 1);
    const end = Math.min(this.totalPages - 2, this.page + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (this.page < this.totalPages - 4) {
      pages.push('...');
    }

    pages.push(this.totalPages - 1);

    return pages;
  }

  get startItem(): number {
  if (this.totalElements === 0) return 0;
  return this.page * this.size + 1;
}

get endItem(): number {
  if (this.totalElements === 0) return 0;
  return Math.min((this.page + 1) * this.size, this.totalElements);
}

  /* NUEVO */
  first() {
    if (this.page !== 0) {
      this.pageChange.emit(0);
    }
  }

  /* NUEVO */
  last() {
    if (this.page !== this.totalPages - 1) {
      this.pageChange.emit(this.totalPages - 1);
    }
  }
}
