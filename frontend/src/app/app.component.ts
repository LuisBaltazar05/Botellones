import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NotificacionService } from './services/notificacion.service';
import { CarritoService } from './services/carrito.service';
import { ConfirmService } from './services/confirm.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  notificaciones = inject(NotificacionService);
  carrito        = inject(CarritoService);
  confirm        = inject(ConfirmService);
}
