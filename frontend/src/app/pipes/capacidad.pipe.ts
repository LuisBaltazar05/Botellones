import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capacidad', standalone: true })
export class CapacidadPipe implements PipeTransform {
  transform(ml: number): string {
    if (!ml && ml !== 0) return '—';
    if (ml >= 1000) {
      const litros = ml / 1000;
      return litros % 1 === 0 ? `${litros} L` : `${litros.toFixed(1)} L`;
    }
    return `${ml} ml`;
  }
}
