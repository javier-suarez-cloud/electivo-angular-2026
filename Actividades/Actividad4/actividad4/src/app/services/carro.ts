import { Injectable, signal } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class Carro {
  // signal: avisa a todos los componentes (Menú, Carro, Pedido) cuando la lista cambia.
  // Necesario en Angular 22, que no usa zone.js y trabaja con OnPush por defecto.
  private items = signal<Producto[]>([]);

  agregarProducto(producto: Producto): void {
    this.items.update(items => [...items, producto]);
  }

  obtenerProductos(): Producto[] {
    return [...this.items()];
  }

  eliminarProducto(indice: number): void {
    this.items.update(items => items.filter((_, i) => i !== indice));
  }

  limpiarCarrito(): void {
    this.items.set([]);
  }

  calcularTotal(): number {
    return this.items().reduce(
      (total, producto) => total + producto.precio,
      0
    );
  }

  cantidadProductos(): number {
    return this.items().length;
  }
}
