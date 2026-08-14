import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductCarousel from "@/components/ProductCarousel";
import CategoryCard from "@/components/CategoryCard";
import { getDestacados, getCategorias } from "@/lib/data";

export default async function Home() {
  const [destacados, categorias] = await Promise.all([
    getDestacados(),
    getCategorias(),
  ]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductCarousel productos={destacados} />
        <section className="grid grid-cols-1 gap-3 px-5 pb-10 sm:grid-cols-3">
          {categorias.map((c) => (
            <CategoryCard key={c.slug} nombre={c.nombre} slug={c.slug} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
