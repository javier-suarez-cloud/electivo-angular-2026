import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-hacer-pedido',
  imports: [ReactiveFormsModule],
  templateUrl: './hacer-pedido.html',
  styleUrl: './hacer-pedido.css'
})
export class HacerPedido {

  formularioPedido = new FormGroup({

    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),

    apellido: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),

    correo: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    telefono: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),

    producto: new FormControl('', [
      Validators.required
    ]),

    cantidad: new FormControl(1, [
      Validators.required,
      Validators.min(1)
    ]),

    direccion: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),

    formaEntrega: new FormControl('', [
      Validators.required
    ]),

    formaPago: new FormControl('', [
      Validators.required
    ]),

    fechaEntrega: new FormControl('', [
      Validators.required
    ]),

    comentario: new FormControl('')
  });

  enviarPedido() {
    if (this.formularioPedido.valid) {
      console.log('Pedido enviado:', this.formularioPedido.value);
      alert('Pedido registrado correctamente');
      this.formularioPedido.reset({ cantidad: 1 });
    } else {
      alert('Debe completar correctamente los campos obligatorios');
      this.formularioPedido.markAllAsTouched();
    }
  }
}