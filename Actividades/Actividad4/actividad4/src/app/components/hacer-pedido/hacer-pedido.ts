import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Carro } from '../../services/carro';

@Component({
  selector: 'app-hacer-pedido',
  imports: [ReactiveFormsModule],
  templateUrl: './hacer-pedido.html',
  styleUrl: './hacer-pedido.css'
})
export class HacerPedido {
  mensajeExito = '';

  pedidoForm = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    telefono: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    // Personalización: campo adicional validado
    direccion: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    entrega: new FormControl('retiro', [Validators.required]),
    pago: new FormControl('transferencia', [Validators.required]),
    comentario: new FormControl('')
  });

  constructor(private carro: Carro) {}

  cantidadProductos(): number {
    return this.carro.cantidadProductos();
  }

  total(): number {
    return this.carro.calcularTotal();
  }

  enviarPedido(): void {
    this.mensajeExito = '';

    if (this.pedidoForm.invalid) {
      this.pedidoForm.markAllAsTouched();
      return;
    }

    if (this.carro.cantidadProductos() === 0) {
      alert('Agrega al menos un producto al carro antes de confirmar el pedido.');
      return;
    }

    console.log('Pedido:', {
      cliente: this.pedidoForm.value,
      productos: this.carro.obtenerProductos(),
      total: this.carro.calcularTotal()
    });

    this.mensajeExito = 'Pedido registrado correctamente para esta demostración.';
    this.carro.limpiarCarrito();
    this.pedidoForm.reset({
      entrega: 'retiro',
      pago: 'transferencia'
    });
  }
}
