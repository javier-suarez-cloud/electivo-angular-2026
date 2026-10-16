import { Component } from '@angular/core';
import { MiComponente } from './components/mi-componente/mi-componente';
import { Frutas } from './components/frutas/frutas';
import { Verduras } from './components/verduras/verduras';
import { FrutosSecos } from './components/frutos-secos/frutos-secos';
import { Contacto } from './components/contacto/contacto';
import { HacerPedido } from './components/hacer-pedido/hacer-pedido';

@Component({
  selector: 'app-root',
  imports: [
    MiComponente,
    Frutas,
    Verduras,
    FrutosSecos,
    Contacto,
    HacerPedido
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}