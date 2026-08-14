"use client";

import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "@/lib/store/cart";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo?categoria=ropa", label: "Ropa" },
  { href: "/catalogo?categoria=accesorios", label: "Accesorios" },
  { href: "/catalogo?categoria=maquillaje", label: "Maquillaje" },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const cantidadItems = useCartStore((s) =>
    s.items.reduce((acc, i) => acc + i.cantidad, 0)
  );

  return (
    <header className="border-b border-olivo-claro/40 bg-crema">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-lg font-medium text-olivo">
          flor &amp; flow
        </Link>

        <nav className="hidden gap-6 text-sm text-olivo md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:opacity-70">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/carrito" className="relative text-olivo">
            Carrito
            {cantidadItems > 0 && (
              <span className="ml-1 rounded-full bg-olivo px-2 py-0.5 text-xs text-rosa-claro">
                {cantidadItems}
              </span>
            )}
          </Link>
          <button
            className="text-olivo md:hidden"
            aria-label="Abrir menu"
            onClick={() => setAbierto(!abierto)}
          >
            Menu
          </button>
        </div>
      </div>

      {abierto && (
        <nav className="flex flex-col gap-3 border-t border-olivo-claro/40 px-5 py-4 text-sm text-olivo md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setAbierto(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
