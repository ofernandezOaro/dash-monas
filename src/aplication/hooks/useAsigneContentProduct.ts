import { AsigneExclusiveContentProductUseCaseInteface } from "../../domain/useCases/product/ProductUseCaseInterfaces";

export default function useAsigneContentProduct({AsigneExclusiveContentProductUseCase}: AsigneExclusiveContentProductUseCaseInteface) {

  const asigneContentProduct = async (data: any) => {
    const { isError, isLoading, isSuccess, result, res } = await AsigneExclusiveContentProductUseCase.asigneContentProduct(data);
    return { isError, isLoading, isSuccess, result, res };
  }

  return {
    asigneContentProduct
  };
}
