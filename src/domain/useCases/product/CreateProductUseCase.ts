import { ProductRepository } from "../../repositories/product/ProductRepositoryInterface";

const CreateProductUseCase = ({ CreateProductRepository }: ProductRepository) => {

  const showUser = async (): Promise<void> => {
    return CreateProductRepository.showUser();
  }

  const updateUser = async (newName: string): Promise<void> => {
    return CreateProductRepository.updateUser(newName);
  }

  const createProduct = async (data: any) => {
    const { isError, isLoading, isSuccess, result, res } = await CreateProductRepository.createProduct(data);
    return { isError, isLoading, isSuccess, result, res };
  }

  const showMessage = (message: string, type: string): void => {
    CreateProductRepository.showMessage(message, type);
  }

  return {
    showUser,
    updateUser,
    createProduct,
    showMessage
  }
}
export default CreateProductUseCase;