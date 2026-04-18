import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catalogo } from '../interfaces/botella.interface';

@Injectable({ providedIn: 'root' })
export class CatalogoService {
  private http = inject(HttpClient);
  private API = 'http://localhost:3000/api';

  getCatalogos() {
    return this.http.get<Catalogo[]>(`${this.API}/catalogos`);
  }
}
