"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCartStore } from "@/lib/store/cart";

export default function Carrito() {
  const { items, quitar, cambiarCantidad, vaciar, total } = useCartStore();
  const [enviado, setEnviado] = useState(false);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");

  function confirmarPedido(e: React.FormEvent) {
    e.preventDefault();
    // Por ahora el pedido solo se confirma en pantalla y se sugiere
    // cerrarlo por WhatsApp. Cuando se integre Mercado Pago, aqui se
    // llama a la API que crea la preferencia de pago.
    setEnviado(true);
    vaciar();
  }

  if (enviado) {
    return (
      <>
        <Navbar />
        <main className="mx-auto max-w-xl px-5 py-16 text-center">
          <h1 className="mb-3 text-xl font-medium text-olivo">
            Pedido recibido
          </h1>
          <p className="text-sm text-olivo/80">
            Gracias {nombre || ""}, en breve te contactamos al {telefono} para
            confirmar tu pedido.
          </p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-2xl px-5 py-10">
        <h1 className="mb-6 text-xl font-medium text-olivo">Tu carrito</h1>

        {items.length === 0 && (
          <p className="text-sm text-olivo/70">Tu carrito esta vacio.</p>
        )}

        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <div
              key={item.producto.id}
              className="flex items-center justify-between rounded-xl border border-olivo-claro/40 bg-white p-3"
            >
              <div>
                <p className="text-sm text-olivo">{item.producto.nombre}</p>
                <p className="text-sm font-medium text-olivo">
                  ${item.producto.precio.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={1}
                  value={item.cantidad}
                  onChange={(e) =>
                    cambiarCantidad(item.producto.id, Number(e.target.value))
                  }
                  className="w-14 rounded-md border border-olivo-claro/60 px-2 py-1 text-sm"
                />
                <button
                  onClick={() => quitar(item.producto.id)}
                  className="text-xs text-olivo/70 underline"
                >
                  Quitar
                </button>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <>
            <p className="mt-6 text-right text-lg font-medium text-olivo">
              Total: ${total().toFixed(2)}
            </p>

            <form onSubmit={confirmarPedido} className="mt-8 flex flex-col gap-3">
              <p className="text-sm font-medium text-olivo">
                Datos para tu pedido
              </p>
              <input
                required
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="rounded-md border border-olivo-claro/60 px-3 py-2 text-sm"
              />
              <input
                required
                placeholder="Telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="rounded-md border border-olivo-claro/60 px-3 py-2 text-sm"
              />
              <button
                type="submit"
                className="mt-2 rounded-full bg-olivo px-6 py-3 text-sm font-medium text-rosa-claro hover:opacity-90"
              >
                Confirmar pedido
              </button>
            </form>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
