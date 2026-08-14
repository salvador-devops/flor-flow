"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function crearProducto(formData: FormData) {
  const nombre = String(formData.get("nombre"));
  const slug = nombre
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  await prisma.producto.create({
    data: {
      nombre,
      slug,
      descripcion: String(formData.get("descripcion") ?? ""),
      precio: Number(formData.get("precio")),
      talla: String(formData.get("talla") ?? "") || null,
      stock: Number(formData.get("stock") ?? 0),
      esOferta: formData.get("esOferta") === "on",
      esNuevo: formData.get("esNuevo") === "on",
      categoriaId: String(formData.get("categoriaId")),
    },
  });

  revalidatePath("/admin/productos");
  revalidatePath("/");
  revalidatePath("/catalogo");
}

export async function eliminarProducto(id: string) {
  await prisma.producto.delete({ where: { id } });
  revalidatePath("/admin/productos");
  revalidatePath("/");
  revalidatePath("/catalogo");
}
