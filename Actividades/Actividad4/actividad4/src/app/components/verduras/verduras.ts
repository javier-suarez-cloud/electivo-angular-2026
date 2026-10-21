import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { Carro } from '../../services/carro';

@Component({
  selector: 'app-verduras',
  imports: [],
  templateUrl: './verduras.html',
  styleUrl: './verduras.css'
})
export class Verduras {
  productos: Producto[] = [
    {
      id: 201,
      nombre: 'Zanahoria',
      descripcion: 'Fresca, firme y excelente para ensaladas.',
      precio: 1500,
      imagen: '/img/zanahoria.svg',
      categoria: 'Verdura'
    },
    {
      id: 202,
      nombre: 'Lechuga',
      descripcion: 'Crujiente y seleccionada para consumo fresco.',
      precio: 1200,
      imagen: '/img/lechuga.svg',
      categoria: 'Verdura'
    },
    {
      id: 203,
      nombre: 'Tomate',
      descripcion: 'Tomate fresco, ideal para ensaladas y preparaciones.',
      precio: 1800,
      imagen: '/img/tomate.svg',
      categoria: 'Verdura'
    },
    {
      id: 204,
      nombre: 'Pimentón',
      descripcion: 'Pimentón rojo carnoso, ideal para salteados.',
      precio: 900,
      imagen: '/img/pimenton.svg',
      categoria: 'Verdura'
    },
    {
      id: 205,
      nombre: 'Brócoli',
      descripcion: 'Brócoli verde y firme, lleno de vitaminas.',
      precio: 1600,
      imagen: '/img/brocoli.svg',
      categoria: 'Verdura'
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
