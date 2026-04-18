import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Botella, Catalogo } from '../interfaces/botella.interface';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class BotellaService {

  private http = inject(HttpClient);
  private API = environment.apiUrl;

  getBotellas() {
    return this.http.get<Botella[]>(`${this.API}/botellas`);
  }

  getBotellaById(id: number) {
    return this.http.get<Botella>(`${this.API}/botellas/${id}`);
  }

  getBotellasPorCatalogo(catalogo_id: number) {
    return this.http.get<Botella[]>(`${this.API}/botellas/catalogo/${catalogo_id}`);
  }

  getCatalogos() {
    return this.http.get<Catalogo[]>(`${this.API}/catalogos`);
  }

  crearBotella(botella: Partial<Botella>) {
    return this.http.post(`${this.API}/botellas`, botella);
  }

  actualizarBotella(id: number, botella: Partial<Botella>) {
    return this.http.put(`${this.API}/botellas/${id}`, botella);
  }

  eliminarBotella(id: number) {
    return this.http.delete(`${this.API}/botellas/${id}`);
  }
}
