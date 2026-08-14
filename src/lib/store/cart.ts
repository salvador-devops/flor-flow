"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Producto } from "../types";

export type ItemCarrito = {
  producto: Producto;
  cantidad: number;
};

type CartState = {
  items: ItemCarrito[];
  agregar: (producto: Producto, cantidad?: number) => void;
  quitar: (productoId: string) => void;
  cambiarCantidad: (productoId: string, cantidad: number) => void;
  vaciar: () => void;
  total: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      agregar: (producto, cantidad = 1) => {
        const items = get().items;
        const existente = items.find((i) => i.producto.id === producto.id);
        if (existente) {
          set({
            items: items.map((i) =>
              i.producto.id === producto.id
                ? { ...i, cantidad: i.cantidad + cantidad }
                : i
            ),
          });
        } else {
          set({ items: [...items, { producto, cantidad }] });
        }
      },
      quitar: (productoId) => {
        set({ items: get().items.filter((i) => i.producto.id !== productoId) });
      },
      cambiarCantidad: (productoId, cantidad) => {
        set({
          items: get().items.map((i) =>
            i.producto.id === productoId ? { ...i, cantidad } : i
          ),
        });
      },
      vaciar: () => set({ items: [] }),
      total: () => {
        return get().items.reduce(
          (acc, i) => acc + i.producto.precio * i.cantidad,
          0
        );
      },
    }),
    { name: "flor-flow-carrito" }
  )
);
