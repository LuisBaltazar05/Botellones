import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BotellaService } from '../../services/botella.service';
import { NotificacionService } from '../../services/notificacion.service';
import { Botella } from '../../interfaces/botella.interface';
import { BotellaCardComponent } from '../botella-card/botella-card.component';

@Component({
  selector: 'app-lista-botellas',
  standalone: true,
  imports: [BotellaCardComponent],
  templateUrl: './lista-botellas.component.html',
  styleUrl: './lista-botellas.component.css'
})
export class ListaBotellaComponent implements OnInit {

  private botellaService = inject(BotellaService);
  private notificacion   = inject(NotificacionService);
  private router         = inject(Router);

  botellas: Botella[] = [];
  cargando = true;
  totalBotellas = 0;

  ngOnInit() {
    this.botellaService.getBotellas().subscribe({
      next: (data) => {
        this.botellas = data;
        this.totalBotellas = data.length;
        this.cargando = false;
      },
      error: () => this.cargando = false
    });
  }

  irADetalle(id: number) {
    this.router.navigate(['/detalle', id]);
  }

  irAEditar(id: number) {
    this.router.navigate(['/editar', id]);
  }

  eliminar(id: number) {
    if (!confirm('¿Deseas eliminar esta botella?')) return;
    this.botellaService.eliminarBotella(id).subscribe({
      next: () => {
        this.botellas = this.botellas.filter(b => b.id !== id);
        this.totalBotellas = this.botellas.length;
        this.notificacion.mostrar('Botella eliminada correctamente');
      },
      error: () => this.notificacion.mostrar('Error al eliminar', 'error')
    });
  }

  irAAgregar() {
    this.router.navigate(['/agregar']);
  }
}
