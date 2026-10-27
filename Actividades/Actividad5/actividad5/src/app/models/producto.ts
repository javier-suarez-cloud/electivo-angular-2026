export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  imagen: string;
}

export type ProductoNuevo =
  Omit<Producto, 'id'>;
