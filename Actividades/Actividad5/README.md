# Actividad 5 – API REST con Node.js y consumo desde Angular 22

**Objetivo:** construir una API REST sencilla con Node.js y Express y consumirla desde la Verdulería Angular 22 usando `HttpClient`, un servicio especializado, `Observable` y `subscribe`.

**Proyectos:**
- [`api-verduleria/`](api-verduleria) – backend Node.js + Express (puerto 3000)
- [`actividad5/`](actividad5) – frontend Angular 22 (puerto 4200)

## Contenidos
- Backend: Express, `cors()`, `express.json()`, datos en memoria
- Endpoints: `GET /api/productos`, `GET /api/productos/:id`, `POST /api/productos` y `GET /api/productos/categoria/:categoria` (desafío)
- Códigos HTTP 200, 201, 400 y 404
- Angular: `provideHttpClient()`, `ProductosService`, `Observable` + `subscribe`
- Estados de carga y error con `@if`, listas con `@for` / `@empty`
- Frutas, Verduras y Frutos Secos obtienen sus datos desde la API y se integran con el carrito
- Formulario `Nuevo Producto` que envía un POST a la API

## Cómo ejecutarla (dos terminales)

```bash
# Terminal 1 – API
cd Actividades/Actividad5/api-verduleria
npm install
node server.js

# Terminal 2 – Angular
cd Actividades/Actividad5/actividad5
npm install
ng serve --open
```

## Nota técnica
Angular 22 no usa `zone.js` y sus componentes son `OnPush` por defecto, por lo que el estado
que se modifica dentro de `subscribe` (productos, cargando, error, mensajes) se guarda en `signal`.
Sin esto, la vista no se actualiza al llegar la respuesta de la API.

Las imágenes de los productos son las `.svg` de la Actividad 4 (`public/img/`).

## Estado
Completada
