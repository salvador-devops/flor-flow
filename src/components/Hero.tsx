import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-rosa px-5 py-16 text-center">
      <h1 className="mb-3 text-2xl font-medium text-olivo md:text-3xl">
        Tu estilo, tu flow
      </h1>
      <p className="mb-6 text-sm text-olivo/80 md:text-base">
        Ropa, accesorios y maquillaje con vibe aesthetic
      </p>
      <Link
        href="/catalogo"
        className="inline-block rounded-full bg-olivo px-6 py-3 text-sm font-medium text-rosa-claro hover:opacity-90"
      >
        Ver catalogo
      </Link>
    </section>
  );
}
