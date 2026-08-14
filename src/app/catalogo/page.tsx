import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductos, getCategorias } from "@/lib/data";
import Link from "next/link";

export default async function Catalogo({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>;
}) {
  const { categoria } = await searchParams;
  const [productos, categorias] = await Promise.all([
    getProductos(categoria),
    getCategorias(),
  ]);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 py-8">
        <h1 className="mb-6 text-xl font-medium text-olivo">Catalogo</h1>

        <div className="mb-6 flex flex-wrap gap-2 text-sm">
          <Link
            href="/catalogo"
            className={`rounded-full px-4 py-2 ${
              !categoria || categoria === "todos"
                ? "bg-olivo text-rosa-claro"
                : "bg-olivo-claro/40 text-olivo"
            }`}
          >
            Todos
          </Link>
          {categorias.map((c) => (
            <Link
              key={c.slug}
              href={`/catalogo?categoria=${c.slug}`}
              className={`rounded-full px-4 py-2 ${
                categoria === c.slug
                  ? "bg-olivo text-rosa-claro"
                  : "bg-olivo-claro/40 text-olivo"
              }`}
            >
              {c.nombre}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {productos.map((p) => (
            <ProductCard key={p.id} producto={p} />
          ))}
          {productos.length === 0 && (
            <p className="text-sm text-olivo/70">
              Todavia no hay productos en esta categoria.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
