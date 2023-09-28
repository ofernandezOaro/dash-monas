// Este servicio podría se mi caso de uso
import ProductServicesUseCases from "../../domain/useCases/createProductUseCase";
// Esto es el repositorio
import productRepository from "../../domain/repositories/createProductRepository";

// Creamos una instancia del servicio con el repositorio por parámetro
const productUseCase = new ProductServicesUseCases(productRepository);

// Este es el hook que se va a usar en el componente
export default function useAsigneProduct() {

  const asigneProduct = async (data: any) => {
    const { isError, isLoading, isSuccess, result, res } = await productUseCase.asigneProduct(data);
    return { isError, isLoading, isSuccess, result, res };
  }

  return {
    asigneProduct
  };
}
