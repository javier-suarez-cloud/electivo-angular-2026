const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let productos = [
  {
    id: 1,
    nombre: 'Tomate',
    descripcion: 'Tomate fresco ideal para ensaladas.',
    precio: 1800,
    categoria: 'verduras',
    imagen: 'img/tomate.svg'
  },
  {
    id: 2,
    nombre: 'Lechuga',
    descripcion: 'Lechuga fresca y crujiente.',
    precio: 1200,
    categoria: 'verduras',
    imagen: 'img/lechuga.svg'
  },
  {
    id: 3,
    nombre: 'Zanahoria',
    descripcion: 'Zanahoria fresca de producción local.',
    precio: 1500,
    categoria: 'verduras',
    imagen: 'img/zanahoria.svg'
  },
  {
    id: 4,
    nombre: 'Manzana',
    descripcion: 'Manzana roja de temporada.',
    precio: 2200,
    categoria: 'frutas',
    imagen: 'img/manzana.svg'
  },
  {
    id: 5,
    nombre: 'Naranja',
    descripcion: 'Naranja jugosa, ideal para jugos y colaciones.',
    precio: 1500,
    categoria: 'frutas',
    imagen: 'img/naranja.svg'
  },
  {
    id: 6,
    nombre: 'Plátano',
    descripcion: 'Plátano maduro y listo para consumir.',
    precio: 1700,
    categoria: 'frutas',
    imagen: 'img/platano.svg'
  },
  {
    id: 7,
    nombre: 'Frutilla',
    descripcion: 'Frutillas rojas y aromáticas de temporada.',
    precio: 3000,
    categoria: 'frutas',
    imagen: 'img/frutilla.svg'
  },
  {
    id: 8,
    nombre: 'Nueces',
    descripcion: 'Nueces seleccionadas, ideales para colaciones.',
    precio: 7500,
    categoria: 'frutos-secos',
    imagen: 'img/nueces.svg'
  },
  {
    id: 9,
    nombre: 'Almendras',
    descripcion: 'Almendras naturales y crujientes.',
    precio: 8200,
    categoria: 'frutos-secos',
    imagen: 'img/almendras.svg'
  },
  {
    id: 10,
    nombre: 'Pistachos',
    descripcion: 'Pistachos seleccionados para consumo directo.',
    precio: 9800,
    categoria: 'frutos-secos',
    imagen: 'img/pistachos.svg'
  }
];

app.get('/', (req, res) => {
  res.json({
    mensaje: 'API Verdulería funcionando'
  });
});

app.get('/api/productos', (req, res) => {
  res.status(200).json(productos);
});

app.get(
  '/api/productos/categoria/:categoria',
  (req, res) => {
    const categoria =
      req.params.categoria;

    const resultado =
      productos.filter(
        producto =>
          producto.categoria === categoria
      );

    res.json(resultado);
  }
);

app.get('/api/productos/:id', (req, res) => {
  const id = Number(req.params.id);

  const producto = productos.find(
    producto => producto.id === id
  );

  if (!producto) {
    return res.status(404).json({
      mensaje: 'Producto no encontrado'
    });
  }

  res.status(200).json(producto);
});

app.post('/api/productos', (req, res) => {
  const {
    nombre,
    descripcion,
    precio,
    categoria,
    imagen
  } = req.body;

  if (!nombre || !descripcion || !precio || !categoria) {
    return res.status(400).json({
      mensaje: 'Faltan datos obligatorios'
    });
  }

  const nuevoProducto = {
    id: productos.length > 0
      ? Math.max(...productos.map(p => p.id)) + 1
      : 1,
    nombre,
    descripcion,
    precio: Number(precio),
    categoria,
    imagen: imagen || ''
  };

  productos.push(nuevoProducto);

  res.status(201).json(nuevoProducto);
});

app.listen(PORT, () => {
  console.log(
    `API ejecutándose en http://localhost:${PORT}`
  );
});
