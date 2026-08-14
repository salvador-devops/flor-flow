import Link from "next/link";
import { Producto } from "@/lib/types";

export default function ProductCard({ producto }: { producto: Producto }) {
  return (
    <Link
      href={`/producto/${producto.slug}`}
      className="block min-w-[160px] rounded-xl border border-olivo-claro/40 bg-white p-3 hover:border-olivo-claro"
    >
      <div className="mb-2 h-28 rounded-lg bg-olivo-claro/40" />
      {producto.esOferta && (
        <span className="mr-1 rounded-full bg-rosa px-2 py-0.5 text-[11px] text-olivo">
          Oferta
        </span>
      )}
      {producto.esNuevo && (
        <span className="rounded-full bg-olivo-claro px-2 py-0.5 text-[11px] text-olivo">
          Nuevo
        </span>
      )}
      <p className="mt-2 text-sm text-olivo">{producto.nombre}</p>
      <p className="text-sm font-medium text-olivo">
        ${producto.precio.toFixed(2)}
      </p>
    </Link>
  );
}
