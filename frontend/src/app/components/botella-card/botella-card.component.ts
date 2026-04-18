import { Component, inject, input, output } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Botella } from '../../interfaces/botella.interface';
import { CapacidadPipe } from '../../pipes/capacidad.pipe';
import { CarritoService } from '../../services/carrito.service';
import { NotificacionService } from '../../services/notificacion.service';

@Component({
  selector: 'app-botella-card',
  standalone: true,
  imports: [CapacidadPipe, DecimalPipe],
  templateUrl: './botella-card.component.html',
  styleUrl: './botella-card.component.css'
})
export class BotellaCardComponent {
  private carrito      = inject(CarritoService);
  private notificacion = inject(NotificacionService);

  botella    = input.required<Botella>();
  verDetalle = output<number>();
  editar     = output<number>();
  eliminar   = output<number>();

  imgError = false;

  irADetalle() { this.verDetalle.emit(this.botella().id); }
  irAEditar()  { this.editar.emit(this.botella().id); }

  solicitarEliminar() { this.eliminar.emit(this.botella().id); }

  agregarAlCarrito() {
    this.carrito.agregar(this.botella());
    this.notificacion.mostrar(`"${this.botella().nombre}" agregado al carrito`, 'exito');
  }
}
