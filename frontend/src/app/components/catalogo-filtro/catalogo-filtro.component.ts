import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BotellaService } from '../../services/botella.service';
import { Botella, Catalogo } from '../../interfaces/botella.interface';
import { BotellaCardComponent } from '../botella-card/botella-card.component';

@Component({
  selector: 'app-catalogo-filtro',
  standalone: true,
  imports: [BotellaCardComponent],
  templateUrl: './catalogo-filtro.component.html',
  styleUrl: './catalogo-filtro.component.css'
})
export class CatalogoFiltroComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private botellaService = inject(BotellaService);

  botellas: Botella[] = [];
  catalogos: Catalogo[] = [];
  catalogoActivo: number | null = null;

  ngOnInit() {
    this.botellaService.getCatalogos().subscribe(data => {
      this.catalogos = data;
    });

    // queryParams — requisito 11c
    this.route.queryParamMap.subscribe(params => {
      const catalogo_id = params.get('catalogo_id');
      if (catalogo_id) {
        this.catalogoActivo = Number(catalogo_id);
        this.botellaService.getBotellasPorCatalogo(this.catalogoActivo).subscribe(data => {
          this.botellas = data;
        });
      } else {
        this.catalogoActivo = null;
        this.botellaService.getBotellas().subscribe(data => {
          this.botellas = data;
        });
      }
    });
  }

  filtrarPor(catalogo_id: number) {
    this.router.navigate(['/catalogo'], {
      queryParams: { catalogo_id }
    });
  }

  verTodos() {
    this.router.navigate(['/catalogo']);
  }

  irADetalle(id: number) {
    this.router.navigate(['/botellas', id]);
  }
}