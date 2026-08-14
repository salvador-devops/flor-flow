# flor & flow

Tienda web de ropa, accesorios y maquillaje. Next.js + Tailwind (storefront y
panel admin) + Supabase (Postgres, Auth, Storage) + Prisma + Zustand.

## 1. Crear el proyecto en Supabase

1. Crea una cuenta/proyecto en https://supabase.com
2. En **Project Settings > API** copia `Project URL` y `anon public key`.
3. En **Project Settings > Database** copia la cadena de conexion (Connection
   string, modo "Transaction" para `DATABASE_URL` y modo "Session" o el
   "Direct connection" para `DIRECT_URL`).
4. Copia `.env.example` a `.env` y llena las 4 variables:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
DATABASE_URL=
DIRECT_URL=
```

## 2. Instalar dependencias

```
npm install
```

## 3. Generar Prisma y crear las tablas

```
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed
```

Esto crea las tablas (`Producto`, `Categoria`, `Pedido`, `ItemPedido`) y
siembra las 3 categorias iniciales (Ropa, Accesorios, Maquillaje).

## 4. Crear tu usuario admin

En el dashboard de Supabase, ve a **Authentication > Users > Add user** y
crea el usuario/contrasena con el que tu novia va a entrar a `/admin`. No
hace falta tocar codigo para esto.

## 5. Correr en local

```
npm run dev
```

- Tienda: http://localhost:3000
- Panel admin: http://localhost:3000/admin/login

## 6. Desplegar

Conecta el repo a Vercel, agrega las mismas 4 variables de entorno en el
proyecto de Vercel, y cada push a la rama principal se publica solo.

## Notas para seguir desarrollando

- `src/lib/data.ts` es la unica capa que usa el storefront para leer
  productos. Ahorita trae de `src/lib/mock-data.ts` (datos de ejemplo) para
  poder ver la tienda funcionando sin depender de la base de datos. Cuando
  ya tengas productos reales cargados desde el panel admin, cambia cada
  funcion de `data.ts` para que use `prisma` (el ejemplo ya esta comentado
  arriba de cada funcion).
- El panel admin (`/admin/productos`, `/admin/pedidos`) ya usa Prisma
  directamente porque es la parte donde se escribe/lee la base de datos real.
- El carrito vive en el navegador (Zustand + localStorage), no en la base de
  datos.
- El pedido en `/carrito` por ahora solo se confirma en pantalla. Cuando se
  integre Mercado Pago, se agrega una ruta que crea la preferencia de pago y
  un webhook que actualiza el estado del pedido a `confirmado` - sin tocar
  el resto de la app.
