import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contacto() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-xl px-5 py-16 text-center">
        <h1 className="mb-3 text-xl font-medium text-olivo">
          flor &amp; flow
        </h1>
        <p className="text-sm text-olivo/80">
          Escribenos por WhatsApp o Instagram, con gusto te ayudamos.
        </p>
        <div className="mt-6 flex justify-center gap-4 text-sm text-olivo">
          <a href="#" className="underline">WhatsApp</a>
          <a href="#" className="underline">Instagram</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
