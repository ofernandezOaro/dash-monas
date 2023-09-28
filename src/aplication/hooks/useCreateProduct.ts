import ProductServicesUseCases from "../../domain/useCases/createProductUseCase";
import productRepository from "../../domain/repositories/createProductRepository";
import productStore from "../redux/product.store";
import { useState } from "preact/hooks";
import { CreateProductEntity } from "../../domain/entities/productEntity";

// Creamos una instancia del servicio con el repositorio por parámetro
const productUseCase = new ProductServicesUseCases(productRepository);

// Este es el hook que se va a usar en el componente
export default function useCreateProduct() {
  const [user, setUser] = useState(productStore.showUser());

  const updateUser = async (newName: string) => {
    setUser(newName);
    await productUseCase.updateUser(newName);
  };

  const showUser = async () => {
    await productUseCase.showUser();
  };

  const createProduct = async (data: CreateProductEntity) => {
    const { isError, isLoading, isSuccess, result, res } = await productUseCase.createProduct(data);
    return { isError, isLoading, isSuccess, result, res };
  }

  return {
    createProduct,
    updateUser,
    user,
    showUser
  };
}
