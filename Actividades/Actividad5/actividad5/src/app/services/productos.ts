import {
  Injectable
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  Observable
} from 'rxjs';

import {
  Producto,
  ProductoNuevo
} from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl =
    'http://localhost:3000/api/productos';

  constructor(
    private http: HttpClient
  ) {}

  obtenerProductos():
    Observable<Producto[]> {
    return this.http.get<Producto[]>(
      this.apiUrl
    );
  }

  obtenerProducto(
    id: number
  ): Observable<Producto> {
    return this.http.get<Producto>(
      `${this.apiUrl}/${id}`
    );
  }

  agregarProducto(
    producto: ProductoNuevo
  ): Observable<Producto> {
    return this.http.post<Producto>(
      this.apiUrl,
      producto
    );
  }

  // Desafío (punto 32): consulta directamente la ruta por categoría
  obtenerPorCategoria(
    categoria: string
  ): Observable<Producto[]> {
    return this.http.get<Producto[]>(
      `${this.apiUrl}/categoria/${categoria}`
    );
  }
}
