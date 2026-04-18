import { Component, computed, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';
import { NotificacionService } from '../../services/notificacion.service';
import { CapacidadPipe } from '../../pipes/capacidad.pipe';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [DecimalPipe, CapacidadPipe, RouterLink],
  templateUrl: './carrito.component.html'
})
export class CarritoComponent {
  carrito      = inject(CarritoService);
  notificacion = inject(NotificacionService);
  private router = inject(Router);

  pedidoCompletado = signal(false);
  numeroPedido     = signal('');
  procesando       = signal(false);

  envio  = computed(() => this.carrito.totalPrecio() >= 999 ? 0 : 99);
  total  = computed(() => this.carrito.totalPrecio() + this.envio());

  confirmarPedido() {
    if (this.carrito.items().length === 0) return;
    this.procesando.set(true);
    setTimeout(() => {
      const num = `BMX-${Date.now().toString().slice(-6)}`;
      this.numeroPedido.set(num);
      this.carrito.vaciar();
      this.pedidoCompletado.set(true);
      this.procesando.set(false);
      this.notificacion.mostrar(`¡Pedido ${num} confirmado!`, 'exito');
    }, 1800);
  }

  seguirComprando() {
    this.router.navigate(['/lista']);
  }
}
