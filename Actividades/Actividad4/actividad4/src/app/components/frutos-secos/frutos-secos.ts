import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { Carro } from '../../services/carro';

@Component({
  selector: 'app-frutos-secos',
  imports: [],
  templateUrl: './frutos-secos.html',
  styleUrl: './frutos-secos.css'
})
export class FrutosSecos {
  productos: Producto[] = [
    {
      id: 301,
      nombre: 'Nueces',
      descripcion: 'Nueces seleccionadas, ideales para colaciones.',
      precio: 7500,
      imagen: '/img/nueces.svg',
      categoria: 'Fruto seco'
    },
    {
      id: 302,
      nombre: 'Almendras',
      descripcion: 'Almendras naturales y crujientes.',
      precio: 8200,
      imagen: '/img/almendras.svg',
      categoria: 'Fruto seco'
    },
    {
      id: 303,
      nombre: 'Pistachos',
      descripcion: 'Pistachos seleccionados para consumo directo.',
      precio: 9800,
      imagen: '/img/pistachos.svg',
      categoria: 'Fruto seco'
    },
    {
      id: 304,
      nombre: 'Maní',
      descripcion: 'Maní tostado sin sal, energía para el día.',
      precio: 3500,
      imagen: '/img/mani.svg',
      categoria: 'Fruto seco'
    },
    {
      id: 305,
      nombre: 'Avellanas',
      descripcion: 'Avellanas europeas de sabor intenso.',
      precio: 9000,
      imagen: '/img/avellanas.svg',
      categoria: 'Fruto seco'
    }
  ];

  constructor(private carro: Carro) {}

  agregar(producto: Producto): void {
    this.carro.agregarProducto(producto);
    alert(`${producto.nombre} fue agregado al carro.`);
  }

  ordenarPorNombre(): void {
    this.productos = [...this.productos].sort(
      (a, b) => a.nombre.localeCompare(b.nombre)
    );
  }

  ordenarPorPrecio(): void {
    this.productos = [...this.productos].sort(
      (a, b) => a.precio - b.precio
    );
  }
}
