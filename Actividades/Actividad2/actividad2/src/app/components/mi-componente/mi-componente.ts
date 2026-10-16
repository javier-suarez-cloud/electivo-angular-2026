import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  imports: [],
  templateUrl: './mi-componente.html',
  styleUrl: './mi-componente.css'
})
export class MiComponente {
  mensaje: string = '¡Hola desde mi primer componente Angular!';
}