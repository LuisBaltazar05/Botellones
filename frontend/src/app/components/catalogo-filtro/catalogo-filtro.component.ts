import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BotellaService } from '../../services/botella.service';
import { CatalogoService } from '../../services/catalogo.service';
import { Botella, Catalogo } from '../../interfaces/botella.interface';
import { BotellaCardComponent } from '../botella-card/botella-card.component';
import { NotificacionService } from '../../services/notificacion.service';

@Component({
  selector: 'app-catalogo-filtro',
  standalone: true,
  imports: [BotellaCardComponent, RouterLink],
  templateUrl: './catalogo-filtro.component.html',
  styleUrl: './catalogo-filtro.component.css'
})
export class CatalogoFiltroComponent implements OnInit {

  private route          = inject(ActivatedRoute);
  private router         = inject(Router);
  private botellaService = inject(BotellaService);
  private catalogoService= inject(CatalogoService);
  private notificacion   = inject(NotificacionService);

  botellas: Botella[] = [];
  catalogos: Catalogo[] = [];
  catalogoActivo: number | null = null;
  cargando = true;

  ngOnInit() {
    this.catalogoService.getCatalogos().subscribe(data => {
      this.catalogos = data;
    });

    // queryParams — requisito 11c
    this.route.queryParamMap.subscribe(params => {
      const catalogo_id = params.get('catalogo_id');
      this.cargando = true;
      if (catalogo_id) {
        this.catalogoActivo = Number(catalogo_id);
        this.botellaService.getBotellasPorCatalogo(this.catalogoActivo).subscribe({
          next: (data) => { this.botellas = data; this.cargando = false; },
          error: () => this.cargando = false
        });
      } else {
        this.catalogoActivo = null;
        this.botellaService.getBotellas().subscribe({
          next: (data) => { this.botellas = data; this.cargando = false; },
          error: () => this.cargando = false
        });
      }
    });
  }

  filtrarPor(catalogo_id: number) {
    this.router.navigate(['/lista'], { queryParams: { catalogo_id } });
  }

  verTodos() {
    this.router.navigate(['/lista']);
  }

  irADetalle(id: number) {
    this.router.navigate(['/detalle', id]);
  }

  eliminarBotella(id: number) {
    if (!confirm('¿Seguro que deseas eliminar esta botella?')) return;
    this.botellaService.eliminarBotella(id).subscribe({
      next: () => {
        this.botellas = this.botellas.filter(b => b.id !== id);
        this.notificacion.mostrar('Botella eliminada correctamente');
      },
      error: () => this.notificacion.mostrar('Error al eliminar', 'error')
    });
  }

  irAEditar(id: number) {
    this.router.navigate(['/editar', id]);
  }
}
