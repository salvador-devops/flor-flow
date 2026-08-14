import { Producto } from "@/lib/types";
import ProductCard from "./ProductCard";

export default function ProductCarousel({ productos }: { productos: Producto[] }) {
  if (productos.length === 0) return null;

  return (
    <section className="px-5 py-8">
      <h2 className="mb-4 text-base font-medium text-olivo">
        Ofertas y novedades
      </h2>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {productos.map((p) => (
          <ProductCard key={p.id} producto={p} />
        ))}
      </div>
    </section>
  );
}
