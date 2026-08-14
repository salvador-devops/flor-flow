import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AddToCartButton from "@/components/AddToCartButton";
import { getProductoPorSlug } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function ProductoDetalle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const producto = await getProductoPorSlug(slug);

  if (!producto) return notFound();

  return (
    <>
      <Navbar />
      <main className="mx-auto grid max-w-4xl gap-8 px-5 py-10 sm:grid-cols-2">
        <div className="h-72 rounded-xl bg-olivo-claro/40" />
        <div>
          {producto.esOferta && (
            <span className="mr-1 rounded-full bg-rosa px-2 py-0.5 text-xs text-olivo">
              Oferta
            </span>
          )}
          {producto.esNuevo && (
            <span className="rounded-full bg-olivo-claro px-2 py-0.5 text-xs text-olivo">
              Nuevo
            </span>
          )}
          <h1 className="mt-3 text-xl font-medium text-olivo">
            {producto.nombre}
          </h1>
          <p className="mt-2 text-lg font-medium text-olivo">
            ${producto.precio.toFixed(2)}
          </p>
          <p className="mt-3 text-sm text-olivo/80">{producto.descripcion}</p>
          {producto.talla && (
            <p className="mt-3 text-sm text-olivo">Tallas: {producto.talla}</p>
          )}
          <div className="mt-6">
            <AddToCartButton producto={producto} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
