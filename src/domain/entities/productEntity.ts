export interface ProductEntity {
  number: number;
  user_email: string;
  file: File | any;
}

export interface CreateProductEntity extends ProductEntity, CombosEntity { }

export interface ProductAsignedEntity extends ProductEntity { }

export interface CombosEntity {
  traje: string;
  ojos: string;
  sombrero: string;
  boca: string;
  accesorios: string;
  pelaje: string;
  fondo: string;
}