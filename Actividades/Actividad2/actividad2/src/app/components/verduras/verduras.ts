import { Component } from '@angular/core';

@Component({
  selector: 'app-verduras',
  imports: [],
  templateUrl: './verduras.html',
  styleUrl: './verduras.css'
})
export class Verduras {
  titulo: string = 'Verduras Frescas';
  descripcion: string =
    'Verduras cosechadas cada día para tu mesa';
}