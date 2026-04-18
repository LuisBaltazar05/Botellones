import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BotellaService } from '../../services/botella.service';
import { NotificacionService } from '../../services/notificacion.service';
import { CarritoService } from '../../services/carrito.service';
import { Botella } from '../../interfaces/botella.interface';
import { DecimalPipe } from '@angular/common';
import { CapacidadPipe } from '../../pipes/capacidad.pipe';

@Component({
  selector: 'app-detalle-botella',
  standalone: true,
  imports: [CapacidadPipe, DecimalPipe],
  templateUrl: './detalle-botella.component.html',
  styleUrl: './detalle-botella.component.css'
})
export class DetalleBotellaComponent implements OnInit {

  private route          = inject(ActivatedRoute);
  private router         = inject(Router);
  private botellaService = inject(BotellaService);
  private notificacion   = inject(NotificacionService);
  private carritoSvc     = inject(CarritoService);

  botella: Botella | null = null;
  cargando = true;

  ngOnInit() {
    // paramsMap — requisito 11b
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.botellaService.getBotellaById(id).subscribe({
        next: (data) => {
          this.botella = data;
          this.cargando = false;
        },
        error: () => {
          this.cargando = false;
        }
      });
    });
  }

  regresar() {
    this.router.navigate(['/lista']);
  }

  agregarAlCarrito() {
    if (!this.botella) return;
    this.carritoSvc.agregar(this.botella);
    this.notificacion.mostrar(`"${this.botella.nombre}" agregado al carrito`, 'exito');
  }

  irAEditar() {
    if (this.botella) this.router.navigate(['/editar', this.botella.id]);
  }

  eliminar() {
    if (!this.botella) return;
    if (!confirm('¿Deseas eliminar esta botella?')) return;
    this.botellaService.eliminarBotella(this.botella.id).subscribe({
      next: () => {
        this.notificacion.mostrar('Botella eliminada');
        this.router.navigate(['/lista']);
      },
      error: () => this.notificacion.mostrar('Error al eliminar', 'error')
    });
  }
}
