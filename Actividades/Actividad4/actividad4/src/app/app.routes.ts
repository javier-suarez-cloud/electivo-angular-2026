import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Frutas } from './components/frutas/frutas';
import { Verduras } from './components/verduras/verduras';
import { FrutosSecos } from './components/frutos-secos/frutos-secos';
import { Contacto } from './components/contacto/contacto';
import { HacerPedido } from './components/hacer-pedido/hacer-pedido';
import { CarroCompra } from './components/carro-compra/carro-compra';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'frutas', component: Frutas },
  { path: 'verduras', component: Verduras },
  { path: 'frutos-secos', component: FrutosSecos },
  { path: 'contacto', component: Contacto },
  { path: 'hacer-pedido', component: HacerPedido },
  { path: 'carro-compra', component: CarroCompra },
  { path: '**', redirectTo: 'inicio' }
];