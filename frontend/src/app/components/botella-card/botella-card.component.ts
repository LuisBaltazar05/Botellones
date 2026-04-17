import { Component, input, output } from '@angular/core';
import { Botella } from '../../interfaces/botella.interface';

@Component({
  selector: 'app-botella-card',
  standalone: true,
  templateUrl: './botella-card.component.html',
  styleUrl: './botella-card.component.css'
})
export class BotellaCardComponent {
  botella = input.required<Botella>();
  verDetalle = output<number>();

  irADetalle() {
    this.verDetalle.emit(this.botella().id);
  }
}