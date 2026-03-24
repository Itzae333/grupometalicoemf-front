export interface ResponseModel<T> {
  code: number;
  date: Date;
  message: string;
  idThread: number;
  data: T;

  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}
