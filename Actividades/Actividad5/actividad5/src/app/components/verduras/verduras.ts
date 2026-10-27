import {
  Component,
  OnInit,
  signal
} from '@angular/core';

import {
  Producto
} from '../../models/producto';

import {
  ProductosService
} from '../../services/productos';

import {
  Carro
} from '../../services/carro';

@Component({
  selector: 'app-verduras',
  imports: [],
  templateUrl: './verduras.html',
  styleUrl: './verduras.css'
})
export class Verduras implements OnInit {

  // signals: Angular 22 no usa zone.js, así que la vista solo se actualiza
  // cuando cambia un signal
  productos = signal<Producto[]>([]);
  cargando = signal(true);
  error = signal('');

  constructor(
    private productosService: ProductosService,
    private carroService: Carro
  ) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.cargando.set(true);
    this.error.set('');

    this.productosService
      .obtenerProductos()
      .subscribe({
        next: (datos) => {
          this.productos.set(datos.filter(
            producto =>
              producto.categoria === 'verduras'
          ));
          this.cargando.set(false);
        },
        error: (error) => {
          console.error(error);
          this.error.set(
            'No fue posible cargar los productos.'
          );
          this.cargando.set(false);
        }
      });
  }

  agregarAlCarro(
    producto: Producto
  ): void {
    this.carroService
      .agregarProducto(producto);

    alert(
      `${producto.nombre} fue agregado al carrito`
    );
  }

  ordenarPorNombre(): void {
    this.productos.update(lista =>
      [...lista].sort(
        (a, b) =>
          a.nombre.localeCompare(b.nombre)
      )
    );
  }

  ordenarPorPrecio(): void {
    this.productos.update(lista =>
      [...lista].sort(
        (a, b) =>
          a.precio - b.precio
      )
    );
  }
}
