import { ProductRepository } from "../../repositories/product/ProductRepositoryInterface";


const AsignExclusiveContentProductUseCase = ({ AsigneExclusiveContentProductRepository}: ProductRepository) => {

  const asigneContentProduct = async (data: any) => {
    const { isError, isLoading, isSuccess, result, res } = await AsigneExclusiveContentProductRepository.asigneContentProduct(data);
    return { isError, isLoading, isSuccess, result, res };
  }

  return {
    asigneContentProduct
  }
}
export default AsignExclusiveContentProductUseCase;