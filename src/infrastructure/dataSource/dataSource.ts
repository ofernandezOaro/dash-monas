import { CreateProductEntity } from "../../domain/entities/productEntity";
import { baseFetch } from "./baseDataSource";

export const createProduct = async (data: CreateProductEntity) => {
  const formdata = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (key === "user_email") {
      if (value === "" || value.trim() === "") {
        return;
      }
    }

    if (key !== "file") {
      formdata.append(key, value as string);
    }
  });

  formdata.append("file", data.file[0]);

  return baseFetch("api/artworks/add-artwork", "POST", formdata);
};

export const asigneProduct = async (data: any) => {
  return baseFetch("api/artworks/assign-artwork", "POST", data);
};

export const asigneContentProduct = async (data: any) => {
  const formdata = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (key !== "file") {
      formdata.append(key, value as string);
    }
  });
  formdata.append("file", data.file[0]);

  return baseFetch("api/artworks/add-artwork/content", "POST", formdata);
};