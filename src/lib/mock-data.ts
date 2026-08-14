import { Producto } from "./types";

// Datos de ejemplo para poder desarrollar y ver la tienda funcionando
// antes de tener el catalogo real cargado en Supabase.
// En cuanto la base de datos este lista, src/lib/data.ts se cambia
// para leer de Prisma en vez de este archivo.

export const productosMock: Producto[] = [
  {
    id: "1",
    nombre: "Blusa flow",
    slug: "blusa-flow",
    descripcion: "Blusa ligera de manga larga, corte suelto.",
    precio: 449,
    imagenUrl: null,
    talla: "S/M/L",
    stock: 12,
    esOferta: true,
    esNuevo: false,
    categoria: { nombre: "Ropa", slug: "ropa" },
  },
  {
    id: "2",
    nombre: "Aretes mini",
    slug: "aretes-mini",
    descripcion: "Aretes chicos bañados en oro.",
    precio: 189,
    imagenUrl: null,
    talla: null,
    stock: 30,
    esOferta: false,
    esNuevo: true,
    categoria: { nombre: "Accesorios", slug: "accesorios" },
  },
  {
    id: "3",
    nombre: "Labial matte",
    slug: "labial-matte",
    descripcion: "Labial de larga duracion, acabado mate.",
    precio: 219,
    imagenUrl: null,
    talla: null,
    stock: 20,
    esOferta: true,
    esNuevo: false,
    categoria: { nombre: "Maquillaje", slug: "maquillaje" },
  },
  {
    id: "4",
    nombre: "Bolso flow",
    slug: "bolso-flow",
    descripcion: "Bolso tejido tamano mediano.",
    precio: 599,
    imagenUrl: null,
    talla: null,
    stock: 8,
    esOferta: false,
    esNuevo: true,
    categoria: { nombre: "Accesorios", slug: "accesorios" },
  },
  {
    id: "5",
    nombre: "Falda midi",
    slug: "falda-midi",
    descripcion: "Falda midi de lino, cintura alta.",
    precio: 529,
    imagenUrl: null,
    talla: "S/M/L",
    stock: 10,
    esOferta: false,
    esNuevo: false,
    categoria: { nombre: "Ropa", slug: "ropa" },
  },
  {
    id: "6",
    nombre: "Paleta de sombras",
    slug: "paleta-sombras",
    descripcion: "Paleta de 9 tonos tierra.",
    precio: 349,
    imagenUrl: null,
    talla: null,
    stock: 15,
    esOferta: false,
    esNuevo: false,
    categoria: { nombre: "Maquillaje", slug: "maquillaje" },
  },
];

export const categoriasMock = [
  { nombre: "Ropa", slug: "ropa" },
  { nombre: "Accesorios", slug: "accesorios" },
  { nombre: "Maquillaje", slug: "maquillaje" },
];
