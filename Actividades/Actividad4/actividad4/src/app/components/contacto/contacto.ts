import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {
  correo = 'contacto@huertofresco.cl';
  telefono = '+56 9 5555 5555';
  horario = 'Lunes a sábado, 09:00 a 19:00 horas';
  direccion = 'Av. Principal 123, Concepción';
  instagram = '@huertofresco.cl';
}
