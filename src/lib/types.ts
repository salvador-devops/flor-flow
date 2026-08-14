export type Categoria = {
  nombre: string;
  slug: string;
};

export type Producto = {
  id: string;
  nombre: string;
  slug: string;
  descripcion: string;
  precio: number;
  imagenUrl: string | null;
  talla: string | null;
  stock: number;
  esOferta: boolean;
  esNuevo: boolean;
  categoria: Categoria;
};
