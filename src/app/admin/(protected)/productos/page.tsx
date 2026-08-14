import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { eliminarProducto } from "./actions";

export default async function AdminProductos() {
  const productos = await prisma.producto.findMany({
    include: { categoria: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-medium text-olivo">Productos</h1>
        <Link
          href="/admin/productos/nuevo"
          className="rounded-full bg-olivo px-5 py-2 text-sm font-medium text-rosa-claro hover:opacity-90"
        >
          Agregar producto
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-olivo-claro/40 text-olivo/70">
              <th className="py-2">Nombre</th>
              <th className="py-2">Categoria</th>
              <th className="py-2">Precio</th>
              <th className="py-2">Stock</th>
              <th className="py-2">Estado</th>
              <th className="py-2"></th>
            </tr>
          </thead>
          <tbody>
            {productos.map((p) => (
              <tr key={p.id} className="border-b border-olivo-claro/20">
                <td className="py-2 text-olivo">{p.nombre}</td>
                <td className="py-2 text-olivo">{p.categoria.nombre}</td>
                <td className="py-2 text-olivo">${p.precio.toString()}</td>
                <td className="py-2 text-olivo">{p.stock}</td>
                <td className="py-2 text-olivo">
                  {p.esOferta ? "Oferta " : ""}
                  {p.esNuevo ? "Nuevo" : ""}
                </td>
                <td className="py-2">
                  <form
                    action={async () => {
                      "use server";
                      await eliminarProducto(p.id);
                    }}
                  >
                    <button className="text-xs text-rosa underline">
                      Eliminar
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {productos.length === 0 && (
              <tr>
                <td colSpan={6} className="py-6 text-center text-olivo/60">
                  Todavia no hay productos cargados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
