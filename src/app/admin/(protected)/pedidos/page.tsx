import { prisma } from "@/lib/prisma";

export default async function AdminPedidos() {
  const pedidos = await prisma.pedido.findMany({
    include: { items: { include: { producto: true } } },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="mb-6 text-xl font-medium text-olivo">Pedidos</h1>

      <div className="flex flex-col gap-4">
        {pedidos.map((pedido) => (
          <div
            key={pedido.id}
            className="rounded-xl border border-olivo-claro/40 bg-white p-4"
          >
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-medium text-olivo">
                {pedido.clienteNombre} · {pedido.clienteTelefono}
              </p>
              <span className="rounded-full bg-olivo-claro/40 px-3 py-1 text-xs text-olivo">
                {pedido.estado}
              </span>
            </div>
            <ul className="mb-2 text-sm text-olivo/80">
              {pedido.items.map((item) => (
                <li key={item.id}>
                  {item.cantidad}x {item.producto.nombre}
                </li>
              ))}
            </ul>
            <p className="text-sm font-medium text-olivo">
              Total: ${pedido.total.toString()}
            </p>
          </div>
        ))}
        {pedidos.length === 0 && (
          <p className="text-sm text-olivo/60">Todavia no hay pedidos.</p>
        )}
      </div>
    </div>
  );
}
