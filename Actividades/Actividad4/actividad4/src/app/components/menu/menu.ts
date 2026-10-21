import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Carro } from '../../services/carro';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  constructor(private carro: Carro) {}

  cantidadCarrito(): number {
    return this.carro.cantidadProductos();
  }
}