import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BotellaService } from '../../services/botella.service';
import { CatalogoService } from '../../services/catalogo.service';
import { NotificacionService } from '../../services/notificacion.service';
import { Catalogo } from '../../interfaces/botella.interface';

@Component({
  selector: 'app-agregar-botella',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-botella.component.html',
  styleUrl: './agregar-botella.component.css'
})
export class AgregarBotellaComponent implements OnInit {

  private botellaService  = inject(BotellaService);
  private catalogoService = inject(CatalogoService);
  private notificacion    = inject(NotificacionService);
  private router          = inject(Router);

  catalogos: Catalogo[] = [];

  nuevaBotella = {
    nombre: '',
    descripcion: '',
    precio: 0,
    capacidad_ml: 0,
    imagen_url: '',
    catalogo_id: 0
  };

  ngOnInit() {
    this.catalogoService.getCatalogos().subscribe(data => {
      this.catalogos = data;
    });
  }

  guardar(formulario: any) {
    if (formulario.invalid) return;

    this.botellaService.crearBotella(this.nuevaBotella).subscribe({
      next: () => {
        this.notificacion.mostrar('Botella agregada correctamente');
        formulario.resetForm();
        setTimeout(() => this.router.navigate(['/lista']), 1000);
      },
      error: () => this.notificacion.mostrar('Error al guardar la botella', 'error')
    });
  }
}
