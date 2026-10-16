import { Component } from '@angular/core';

@Component({
  selector: 'app-frutas',
  imports: [],
  templateUrl: './frutas.html',
  styleUrl: './frutas.css'
})
export class Frutas {
  titulo: string = 'Frutas Frescas';
  descripcion: string =
    'Productos frescos seleccionados para nuestros clientes';
}