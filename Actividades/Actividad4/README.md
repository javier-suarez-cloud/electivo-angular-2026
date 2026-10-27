# Actividad 4 – Verdulería completa en Angular 22

**Objetivo:** construir desde cero una verdulería con componentes standalone, routing, interfaz TypeScript, servicio compartido de carro de compra y formulario reactivo.

**Proyecto:** [`actividad4/`](actividad4)

## Contenidos
- Angular Router (`routerLink`, `router-outlet`, ruta `**`)
- Interface `Producto` y servicio `Carro` (`@Injectable`)
- Control flow `@for` / `@if`, property y event binding
- Carro de compra: agregar, eliminar, vaciar y total
- Formulario reactivo de pedido que consulta el carro

## Personalización realizada
- Nombre comercial: **Verdulería Huerto Fresco**.
- Dos productos nuevos por categoría: Frutilla y Pera; Pimentón y Brócoli; Maní y Avellanas.
- Colores: botones y carro en naranjo, degradado verde-naranjo en la cabecera (diseño responsivo intacto).
- Contacto: se agregan dirección e Instagram.
- Hacer Pedido: campo adicional **Dirección** (obligatorio, mínimo 5 caracteres).
- Carro de Compra: botón **+1** para agregar otra unidad del mismo producto.

## Nota técnica
Angular 22 no usa `zone.js` y sus componentes son `OnPush` por defecto, por lo que el
servicio `Carro` guarda los productos en un `signal`. Así el Menú, el Carro y el Pedido
se actualizan automáticamente cuando cambia la lista.

## Estado
Completada
