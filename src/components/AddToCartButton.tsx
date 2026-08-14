"use client";

import { useState } from "react";
import { Producto } from "@/lib/types";
import { useCartStore } from "@/lib/store/cart";

export default function AddToCartButton({ producto }: { producto: Producto }) {
  const agregar = useCartStore((s) => s.agregar);
  const [agregado, setAgregado] = useState(false);

  return (
    <button
      onClick={() => {
        agregar(producto);
        setAgregado(true);
        setTimeout(() => setAgregado(false), 1500);
      }}
      className="rounded-full bg-olivo px-6 py-3 text-sm font-medium text-rosa-claro hover:opacity-90"
    >
      {agregado ? "Agregado" : "Agregar al carrito"}
    </button>
  );
}
