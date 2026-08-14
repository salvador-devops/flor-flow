import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "./LogoutButton";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // La pantalla de login vive dentro de /admin pero no necesita este
  // wrapper con nav; el middleware ya se encarga de redirigir si no
  // hay sesion en cualquier otra ruta de /admin.
  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-crema">
      <header className="flex items-center justify-between border-b border-olivo-claro/40 px-5 py-4">
        <div className="flex items-center gap-6">
          <span className="text-sm font-medium text-olivo">
            Panel flor &amp; flow
          </span>
          <nav className="flex gap-4 text-sm text-olivo">
            <Link href="/admin/productos">Productos</Link>
            <Link href="/admin/pedidos">Pedidos</Link>
          </nav>
        </div>
        <LogoutButton />
      </header>
      <main className="px-5 py-6">{children}</main>
    </div>
  );
}
