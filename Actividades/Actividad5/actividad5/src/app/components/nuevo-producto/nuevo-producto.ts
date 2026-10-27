import {
  Component,
  signal
} from '@angular/core';

import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import {
  ProductosService
} from '../../services/productos';

@Component({
  selector: 'app-nuevo-producto',
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo-producto.html',
  styleUrl: './nuevo-producto.css'
})
export class NuevoProducto {

  // signals: Angular 22 no usa zone.js, la vista se actualiza al cambiar un signal
  mensaje = signal('');
  error = signal('');

  formulario = new FormGroup({

    nombre: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
    }),

    descripcion: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required
      ]
    }),

    precio: new FormControl(0, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(1)
      ]
    }),

    categoria: new FormControl(
      'verduras',
      {
        nonNullable: true,
        validators: [
          Validators.required
        ]
      }
    ),

    imagen: new FormControl(
      'img/tomate.svg',
      {
        nonNullable: true
      }
    )

  });

  constructor(
    private productosService: ProductosService
  ) {}

  guardar(): void {
    this.mensaje.set('');
    this.error.set('');

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const producto =
      this.formulario.getRawValue();

    this.productosService
      .agregarProducto(producto)
      .subscribe({
        next: (respuesta) => {
          this.mensaje.set(
            `Producto ${respuesta.nombre} creado correctamente.`
          );

          this.formulario.reset({
            nombre: '',
            descripcion: '',
            precio: 0,
            categoria: 'verduras',
            imagen: 'img/tomate.svg'
          });
        },
        error: (error) => {
          console.error(error);
          this.error.set(
            'No fue posible registrar el producto.'
          );
        }
      });
  }
}
