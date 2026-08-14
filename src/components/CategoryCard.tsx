import Link from "next/link";

const colores: Record<string, string> = {
  ropa: "bg-olivo-claro",
  accesorios: "bg-rosa",
  maquillaje: "bg-rosa-claro",
};

export default function CategoryCard({
  nombre,
  slug,
}: {
  nombre: string;
  slug: string;
}) {
  return (
    <Link
      href={`/catalogo?categoria=${slug}`}
      className={`rounded-xl ${colores[slug] ?? "bg-olivo-claro"} px-4 py-8 text-center hover:opacity-90`}
    >
      <p className="text-sm font-medium text-olivo">{nombre}</p>
    </Link>
  );
}
