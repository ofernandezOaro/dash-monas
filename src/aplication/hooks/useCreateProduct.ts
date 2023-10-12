import productStore from "../redux/product.store";
import { useState } from "preact/hooks";
import { CreateProductEntity } from "../../domain/entities/productEntity";
import { CreateProductUseCaseInteface } from "../../domain/useCases/product/ProductUseCaseInterfaces";

export const useCreateProduct = ({ CreateProductUseCase }: CreateProductUseCaseInteface) => {
  const [user, setUser] = useState(productStore.showUser());

  const updateUser = async (newName: string) => {
    setUser(newName);
    await CreateProductUseCase.updateUser(newName);
  };

  const showUser = async () => {
    await CreateProductUseCase.showUser();
  };

  const createProduct = async (data: CreateProductEntity) => {
    const { isError, isLoading, isSuccess, result, res } = await CreateProductUseCase.createProduct(data);
    return { isError, isLoading, isSuccess, result, res };
  }

  return {
    createProduct,
    updateUser,
    user,
    showUser
  };
}

export default useCreateProduct;