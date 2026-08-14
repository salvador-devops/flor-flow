import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const categorias = [
    { nombre: "Ropa", slug: "ropa" },
    { nombre: "Accesorios", slug: "accesorios" },
    { nombre: "Maquillaje", slug: "maquillaje" },
  ];

  for (const c of categorias) {
    await prisma.categoria.upsert({
      where: { slug: c.slug },
      update: {},
      create: c,
    });
  }

  console.log("Categorias creadas.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
