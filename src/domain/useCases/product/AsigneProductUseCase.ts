import { ProductRepository } from "../../repositories/product/ProductRepositoryInterface";


const AsignProductUseCase = ({ AsigneProductRepository}: ProductRepository) => {

  const asigneProduct = async (data: any) => {
    const { isError, isLoading, isSuccess, result, res } = await AsigneProductRepository.asigneProduct(data);
    return { isError, isLoading, isSuccess, result, res };
  }

  return {
    asigneProduct,
  }
}
export default AsignProductUseCase;