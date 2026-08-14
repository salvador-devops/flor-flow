import { prisma } from "@/lib/prisma";
import { crearProducto } from "../actions";
import { redirect } from "next/navigation";

export default async function NuevoProducto() {
  const categorias = await prisma.categoria.findMany();

  async function accion(formData: FormData) {
    "use server";
    await crearProducto(formData);
    redirect("/admin/productos");
  }

  return (
    <div className="max-w-lg">
      <h1 className="mb-6 text-xl font-medium text-olivo">
        Agregar producto
      </h1>
      <form action={accion} className="flex flex-col gap-3">
        <input
          required
          name="nombre"
          placeholder="Nombre"
          className="rounded-md border border-olivo-claro/60 px-3 py-2 text-sm"
        />
        <textarea
          name="descripcion"
          placeholder="Descripcion"
          className="rounded-md border border-olivo-claro/60 px-3 py-2 text-sm"
        />
        <input
          required
          type="number"
          step="0.01"
          name="precio"
          placeholder="Precio"
          className="rounded-md border border-olivo-claro/60 px-3 py-2 text-sm"
        />
        <input
          name="talla"
          placeholder="Tallas (opcional, ej. S/M/L)"
          className="rounded-md border border-olivo-claro/60 px-3 py-2 text-sm"
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          defaultValue={0}
          className="rounded-md border border-olivo-claro/60 px-3 py-2 text-sm"
        />
        <select
          required
          name="categoriaId"
          className="rounded-md border border-olivo-claro/60 px-3 py-2 text-sm"
        >
          <option value="">Selecciona categoria</option>
          {categorias.map((c) => (
            <option key={c.id} value={c.id}>
              {c.nombre}
            </option>
          ))}
        </select>
        <label className="flex items-center gap-2 text-sm text-olivo">
          <input type="checkbox" name="esOferta" /> Es oferta
        </label>
        <label className="flex items-center gap-2 text-sm text-olivo">
          <input type="checkbox" name="esNuevo" /> Es nuevo
        </label>
        <button
          type="submit"
          className="mt-2 rounded-full bg-olivo px-6 py-3 text-sm font-medium text-rosa-claro hover:opacity-90"
        >
          Guardar producto
        </button>
      </form>
    </div>
  );
}
