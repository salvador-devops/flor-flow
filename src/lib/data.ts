import { Producto } from "./types";
import { productosMock, categoriasMock } from "./mock-data";

// Esta es la unica capa que hay que tocar cuando ya este lista la base
// de datos en Supabase: cada funcion se cambia para usar prisma en vez
// del mock, y el resto de la app (paginas y componentes) no cambia.
//
// Ejemplo real con Prisma:
// export async function getDestacados(): Promise<Producto[]> {
//   const productos = await prisma.producto.findMany({
//     where: { OR: [{ esOferta: true }, { esNuevo: true }] },
//     include: { categoria: true },
//   });
//   return productos.map(mapProducto);
// }

export async function getDestacados(): Promise<Producto[]> {
  return productosMock.filter((p) => p.esOferta || p.esNuevo);
}

export async function getCategorias() {
  return categoriasMock;
}

export async function getProductos(categoriaSlug?: string): Promise<Producto[]> {
  if (!categoriaSlug || categoriaSlug === "todos") return productosMock;
  return productosMock.filter((p) => p.categoria.slug === categoriaSlug);
}

export async function getProductoPorSlug(slug: string): Promise<Producto | undefined> {
  return productosMock.find((p) => p.slug === slug);
}
