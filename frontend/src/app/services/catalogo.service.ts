import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catalogo } from '../interfaces/botella.interface';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CatalogoService {
  private http = inject(HttpClient);
  private API = environment.apiUrl;

  getCatalogos() {
    return this.http.get<Catalogo[]>(`${this.API}/catalogos`);
  }
}
