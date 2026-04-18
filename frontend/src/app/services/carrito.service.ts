import { Injectable, computed, signal } from '@angular/core';
import { Botella } from '../interfaces/botella.interface';

export interface ItemCarrito {
  botella: Botella;
  cantidad: number;
}

@Injectable({ providedIn: 'root' })
export class CarritoService {
  readonly items = signal<ItemCarrito[]>([]);

  readonly totalItems  = computed(() => this.items().reduce((s, i) => s + i.cantidad, 0));
  readonly totalPrecio = computed(() => this.items().reduce((s, i) => s + i.botella.precio * i.cantidad, 0));

  agregar(botella: Botella) {
    this.items.update(lista => {
      const idx = lista.findIndex(i => i.botella.id === botella.id);
      if (idx >= 0) {
        return lista.map((item, j) => j === idx ? { ...item, cantidad: item.cantidad + 1 } : item);
      }
      return [...lista, { botella, cantidad: 1 }];
    });
  }

  cambiarCantidad(id: number, delta: number) {
    this.items.update(lista =>
      lista.map(i => i.botella.id === id
        ? { ...i, cantidad: Math.max(1, i.cantidad + delta) }
        : i)
    );
  }

  quitar(id: number) {
    this.items.update(lista => lista.filter(i => i.botella.id !== id));
  }

  vaciar() {
    this.items.set([]);
  }
}
