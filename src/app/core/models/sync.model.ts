export interface VentaSync {
  id: number;
  origen: string;
  ventaId: number;
  total: number;
  fechaHoraVenta: string;
  nombreCliente: string;
  estatusSync: string;
  intentos: number;

  pagos: PagoSync[];
  detalles: DetalleSync[];
}

export interface PagoSync {
  tipoPago: string;
  cantidad: number;
  fechaHora: string;
}

export interface DetalleSync {
  productoId: number;
  nombreProducto: string;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;
}

export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  page: number;
  hasNext: boolean;
  hasPrevious: boolean;
}


export interface SpringPage<T> {
  content: T[];
  number: number;
  size: number;
  totalPages: number;
  totalElements: number;
  first: boolean;
  last: boolean;
}


export interface CorteSync {
  id: number;
  origen: 'VIRGEN' | 'PUNTO_VENTA';

  corteCajaId: number;

  totalEfectivo: number;
  totalTarjeta: number;
  totalTransferencia: number;
  totalCheque: number;
  totalDeposito: number;
  totalPorPagar: number;

  fechaHoraCorteCaja: string;

  estatusSync: string;
  intentos: number;

  ventas: number[]; // 🔥 SOLO IDS
}