import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-olivo px-5 py-8 text-center text-rosa-claro">
      <p className="mb-2 text-sm">flor &amp; flow</p>
      <div className="flex justify-center gap-4 text-xs">
        <Link href="/contacto" className="hover:opacity-80">
          Contacto
        </Link>
        <a href="#" className="hover:opacity-80">
          Instagram
        </a>
        <a href="#" className="hover:opacity-80">
          WhatsApp
        </a>
      </div>
    </footer>
  );
}
