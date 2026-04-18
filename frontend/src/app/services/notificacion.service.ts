import { Injectable, signal, computed } from '@angular/core';

export interface Notificacion {
  id: number;
  texto: string;
  tipo: 'exito' | 'error' | 'info';
}

@Injectable({ providedIn: 'root' })
export class NotificacionService {
  private contador = 0;
  readonly lista = signal<Notificacion[]>([]);
  readonly hayNotificaciones = computed(() => this.lista().length > 0);

  mostrar(texto: string, tipo: 'exito' | 'error' | 'info' = 'exito') {
    const id = ++this.contador;
    this.lista.update(ns => [...ns, { id, texto, tipo }]);
    setTimeout(() => this.cerrar(id), 3500);
  }

  cerrar(id: number) {
    this.lista.update(ns => ns.filter(n => n.id !== id));
  }
}
