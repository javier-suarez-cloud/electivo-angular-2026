import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {
  empresa: string = 'Frutas Frescas Todo el Día';
  correo: string = 'contacto@ejemplo.cl';
  telefono: string = '+56 9 1234 5678';
  horario: string = 'Lunes a viernes, 09:00 a 18:00 horas';
  direccion: string = 'Av. Principal 123, Concepción';
}