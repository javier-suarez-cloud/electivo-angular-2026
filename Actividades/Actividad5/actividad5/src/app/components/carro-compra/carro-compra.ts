import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { Carro } from '../../services/carro';

@Component({
  selector: 'app-carro-compra',
  imports: [],
  templateUrl: './carro-compra.html',
  styleUrl: './carro-compra.css'
})
export class CarroCompra {
  constructor(private carro: Carro) {}

  productos(): Producto[] {
    return this.carro.obtenerProductos();
  }

  total(): number {
    return this.carro.calcularTotal();
  }

  eliminar(indice: number): void {
    this.carro.eliminarProducto(indice);
  }

  vaciar(): void {
    this.carro.limpiarCarrito();
  }

  // Personalización: agrega otra unidad del mismo producto sin volver al catálogo
  agregarOtro(producto: Producto): void {
    this.carro.agregarProducto(producto);
  }
}
