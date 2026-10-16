import { Routes } from '@angular/router';
import { Frutas } from './components/frutas/frutas';
import { Verduras } from './components/verduras/verduras';
import { FrutosSecos } from './components/frutos-secos/frutos-secos';
import { Contacto } from './components/contacto/contacto';
import { HacerPedido } from './components/hacer-pedido/hacer-pedido';

export const routes: Routes = [
  { path: '', redirectTo: 'frutas', pathMatch: 'full' },
  { path: 'frutas', component: Frutas },
  { path: 'verduras', component: Verduras },
  { path: 'frutos-secos', component: FrutosSecos },
  { path: 'contacto', component: Contacto },
  { path: 'pedido', component: HacerPedido }
];