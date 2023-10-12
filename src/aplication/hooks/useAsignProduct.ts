import { AsigneProductUseCaseInteface } from "../../domain/useCases/product/ProductUseCaseInterfaces";

export default function useAsigneProduct({AsigneProductUseCase}: AsigneProductUseCaseInteface) {

  const asigneProduct = async (data: any) => {
    const { isError, isLoading, isSuccess, result, res } = await AsigneProductUseCase.asigneProduct(data);
    return { isError, isLoading, isSuccess, result, res };
  }

  return {
    asigneProduct
  };
}
