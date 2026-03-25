import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CorteSync, PageResponse, SpringPage, VentaSync } from '../models/sync.model';

@Injectable({
  providedIn: 'root'
})
export class SyncService {

  private api = 'https://javapaas-209806-0.cloudclusters.net/api/sync';

  constructor(private http: HttpClient) {}

  getVentas(filters: any): Observable<SpringPage<VentaSync>> {

    let params = new HttpParams()
      .set('page', filters.page || 0)
      .set('size', filters.size || 10);

    if (filters.busqueda) params = params.set('busqueda', filters.busqueda);
if (filters.origen) params = params.set('origen', filters.origen);
if (filters.fechaInicio) params = params.set('fechaInicio', filters.fechaInicio);
if (filters.fechaFin) params = params.set('fechaFin', filters.fechaFin);
    return this.http.get<SpringPage<VentaSync>>(`${this.api}/ventas`, { params });
  }

  getCortes(filters: any): Observable<SpringPage<CorteSync>> {

  let params = new HttpParams()
    .set('page', filters.page || 0)
    .set('size', filters.size || 10);

  if (filters.origen) params = params.set('origen', filters.origen);
  if (filters.estatus) params = params.set('estatus', filters.estatus);
  if (filters.fechaInicio) params = params.set('fechaInicio', filters.fechaInicio);
  if (filters.fechaFin) params = params.set('fechaFin', filters.fechaFin);

  return this.http.get<SpringPage<CorteSync>>(`${this.api}/cortes`, { params });
}
}