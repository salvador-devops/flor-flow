"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setCargando(true);
    setError("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setCargando(false);

    if (error) {
      setError("Correo o contrasena incorrectos.");
      return;
    }

    router.push("/admin/productos");
    router.refresh();
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center px-5">
      <h1 className="mb-6 text-center text-xl font-medium text-olivo">
        Panel flor &amp; flow
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          required
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-md border border-olivo-claro/60 px-3 py-2 text-sm"
        />
        <input
          required
          type="password"
          placeholder="Contrasena"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-md border border-olivo-claro/60 px-3 py-2 text-sm"
        />
        {error && <p className="text-xs text-rosa">{error}</p>}
        <button
          disabled={cargando}
          type="submit"
          className="mt-2 rounded-full bg-olivo px-6 py-3 text-sm font-medium text-rosa-claro hover:opacity-90 disabled:opacity-60"
        >
          {cargando ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </main>
  );
}
