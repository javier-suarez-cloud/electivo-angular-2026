import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { Carro } from '../../services/carro';

@Component({
  selector: 'app-frutas',
  imports: [],
  templateUrl: './frutas.html',
  styleUrl: './frutas.css'
})
export class Frutas {
  productos: Producto[] = [
    {
      id: 101,
      nombre: 'Manzana',
      descripcion: 'Manzana fresca, crujiente y seleccionada.',
      precio: 1800,
      imagen: '/img/manzana.svg',
      categoria: 'Fruta'
    },
    {
      id: 102,
      nombre: 'Naranja',
      descripcion: 'Naranja jugosa, ideal para jugos y colaciones.',
      precio: 1500,
      imagen: '/img/naranja.svg',
      categoria: 'Fruta'
    },
    {
      id: 103,
      nombre: 'Plátano',
      descripcion: 'Plátano maduro y listo para consumir.',
      precio: 1700,
      imagen: '/img/platano.svg',
      categoria: 'Fruta'
    },
    {
      id: 104,
      nombre: 'Frutilla',
      descripcion: 'Frutillas rojas y aromáticas de temporada.',
      precio: 3000,
      imagen: '/img/frutilla.svg',
      categoria: 'Fruta'
    },
    {
      id: 105,
      nombre: 'Pera',
      descripcion: 'Pera dulce y jugosa, perfecta para el postre.',
      precio: 1900,
      imagen: '/img/pera.svg',
      categoria: 'Fruta'
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
