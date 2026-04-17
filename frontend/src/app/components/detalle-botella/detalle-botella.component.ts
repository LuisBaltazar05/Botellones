import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BotellaService } from '../../services/botella.service';
import { Botella } from '../../interfaces/botella.interface';

@Component({
  selector: 'app-detalle-botella',
  standalone: true,
  imports: [],
  templateUrl: './detalle-botella.component.html',
  styleUrl: './detalle-botella.component.css'
})
export class DetalleBotellaComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private botellaService = inject(BotellaService);

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
    this.router.navigate(['/botellas']);
  }
}