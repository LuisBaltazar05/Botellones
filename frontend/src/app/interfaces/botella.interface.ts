export interface Botella {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  capacidad_ml: number;
  imagen_url: string;
  catalogo: string;
  catalogo_id: number;
}

export interface Catalogo {
  id: number;
  nombre: string;
}