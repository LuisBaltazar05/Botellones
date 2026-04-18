import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BotellaService } from '../../services/botella.service';
import { Botella } from '../../interfaces/botella.interface';
import { BotellaCardComponent } from '../../components/botella-card/botella-card.component';

@Component({
  selector: 'app-buscar-botellas',
  standalone: true,
  imports: [FormsModule, BotellaCardComponent],
  templateUrl: './buscar-botellas.component.html',
  styleUrl: './buscar-botellas.component.css'
})
export class BuscarBotellasComponent implements OnInit {

  private botellaService = inject(BotellaService);
  private router = inject(Router);

  // Signals — aportación extra #2
  private todasBotellas = signal<Botella[]>([]);
  readonly termino = signal('');
  readonly cargando = signal(true);

  readonly resultados = computed(() => {
    const busqueda = this.termino().toLowerCase().trim();
    if (!busqueda) return [];
    return this.todasBotellas().filter(b =>
      b.nombre.toLowerCase().includes(busqueda) ||
      b.descripcion.toLowerCase().includes(busqueda) ||
      b.catalogo.toLowerCase().includes(busqueda)
    );
  });

  readonly totalResultados = computed(() => this.resultados().length);
  readonly buscando = computed(() => this.termino().trim().length > 0);

  ngOnInit() {
    this.botellaService.getBotellas().subscribe({
      next: (data) => {
        this.todasBotellas.set(data);
        this.cargando.set(false);
      },
      error: () => this.cargando.set(false)
    });
  }

  actualizarTermino(valor: string) {
    this.termino.set(valor);
  }

  irADetalle(id: number) {
    this.router.navigate(['/detalle', id]);
  }

  irAEditar(id: number) {
    this.router.navigate(['/editar', id]);
  }
}
