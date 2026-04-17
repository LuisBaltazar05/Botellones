import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BotellaService } from '../../services/botella.service';
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
  private router = inject(Router);

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
      error: (err) => {
        console.error('Error al cargar botellas', err);
        this.cargando = false;
      }
    });
  }

  // Ruta programática — requisito 11d
  irADetalle(id: number) {
    this.router.navigate(['/botellas', id]);
  }

  irAAgregar() {
    this.router.navigate(['/agregar']);
  }
}
