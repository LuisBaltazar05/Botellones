import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BotellaService } from '../../services/botella.service';
import { CatalogoService } from '../../services/catalogo.service';
import { Catalogo } from '../../interfaces/botella.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  private botellaService  = inject(BotellaService);
  private catalogoService = inject(CatalogoService);

  totalBotellas = signal(0);
  catalogos     = signal<Catalogo[]>([]);

  catIconos: Record<string, string> = {
    'Acero':    '⚙️',
    'Plastico': '♻️',
    'Cristal':  '💎'
  };

  catColors: Record<string, string> = {
    'Acero':    '#6B7280',
    'Plastico': '#EA580C',
    'Cristal':  '#0EA5E9'
  };

  ngOnInit() {
    this.botellaService.getBotellas().subscribe(data => {
      this.totalBotellas.set(data.length);
    });
    this.catalogoService.getCatalogos().subscribe(data => {
      this.catalogos.set(data);
    });
  }
}
