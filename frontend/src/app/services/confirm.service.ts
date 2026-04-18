import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ConfirmService {
  readonly visible  = signal(false);
  readonly mensaje  = signal('');
  private resolver?: (ok: boolean) => void;

  abrir(mensaje: string): Promise<boolean> {
    this.mensaje.set(mensaje);
    this.visible.set(true);
    return new Promise(resolve => { this.resolver = resolve; });
  }

  confirmar() { this.visible.set(false); this.resolver?.(true);  }
  cancelar()  { this.visible.set(false); this.resolver?.(false); }
}
