import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BotellaService } from '../../services/botella.service';
import { CatalogoService } from '../../services/catalogo.service';
import { NotificacionService } from '../../services/notificacion.service';
import { Catalogo } from '../../interfaces/botella.interface';

@Component({
  selector: 'app-editar-botella',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editar-botella.component.html',
  styleUrl: './editar-botella.component.css'
})
export class EditarBotellaComponent implements OnInit {

  private route       = inject(ActivatedRoute);
  private router      = inject(Router);
  private fb          = inject(FormBuilder);
  private botellaService   = inject(BotellaService);
  private catalogoService  = inject(CatalogoService);
  private notificacion     = inject(NotificacionService);

  catalogos: Catalogo[] = [];
  cargando = true;
  guardando = false;
  botellaId = 0;

  form = this.fb.group({
    nombre:      ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    descripcion: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
    precio:      [0,  [Validators.required, Validators.min(0.01), Validators.max(99999)]],
    capacidad_ml:[0,  [Validators.required, Validators.min(1), Validators.max(50000)]],
    imagen_url:  ['', [Validators.pattern('https?://.+')]],
    catalogo_id: [0,  [Validators.required, Validators.min(1), Validators.max(9999)]]
  });

  ngOnInit() {
    this.catalogoService.getCatalogos().subscribe(data => {
      this.catalogos = data;
    });

    // paramsMap — requisito 11b (también usado aquí para cargar datos)
    this.route.paramMap.subscribe(params => {
      this.botellaId = Number(params.get('id'));
      this.botellaService.getBotellaById(this.botellaId).subscribe({
        next: (botella) => {
          this.form.patchValue({
            nombre:       botella.nombre,
            descripcion:  botella.descripcion,
            precio:       Number(botella.precio),
            capacidad_ml: Number(botella.capacidad_ml),
            imagen_url:   botella.imagen_url || '',
            catalogo_id:  Number(botella.catalogo_id)
          });
          this.cargando = false;
        },
        error: () => {
          this.notificacion.mostrar('No se encontró la botella', 'error');
          this.router.navigate(['/lista']);
        }
      });
    });
  }

  guardar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.guardando = true;
    this.botellaService.actualizarBotella(this.botellaId, this.form.value as any).subscribe({
      next: () => {
        this.notificacion.mostrar('Botella actualizada correctamente');
        this.router.navigate(['/lista']);
      },
      error: () => {
        this.notificacion.mostrar('Error al actualizar la botella', 'error');
        this.guardando = false;
      }
    });
  }

  cancelar() {
    this.router.navigate(['/lista']);
  }

  // Helpers para acceder a controles en el template
  get nombre()      { return this.form.get('nombre'); }
  get descripcion() { return this.form.get('descripcion'); }
  get precio()      { return this.form.get('precio'); }
  get capacidad()   { return this.form.get('capacidad_ml'); }
  get imagenUrl()   { return this.form.get('imagen_url'); }
  get catalogoId()  { return this.form.get('catalogo_id'); }
}
