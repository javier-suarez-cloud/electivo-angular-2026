import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  imports: [],
  templateUrl: './cabecera.html',
  styleUrl: './cabecera.css'
})
export class Cabecera {
  titulo: string = 'Frutas Frescas Todo el Día';
  subtitulo: string =
    'Frutas, verduras y frutos secos directamente para nuestros clientes';
}