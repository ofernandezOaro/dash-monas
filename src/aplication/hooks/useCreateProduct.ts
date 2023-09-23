// Este servicio podría se mi caso de uso
import ProductServicesUseCases from "../../domain/useCases/createProductUseCase";
// Esto es el repositorio
import counterRepository from "../../domain/repositories/createProductRepository";

// Creamos una instancia del servicio con el repositorio por parámetro
const counterService = new ProductServicesUseCases(counterRepository);

// Este es el hook que se va a usar en el componente
export default function useCreateProduct() {
  // Al hook le pasamos el store con el getCount para tener un valor inicial
  /* const [count, setCount] = useState(counterStore.getCount()); */

  /* // Esto hace que el componente se suscriba a los cambios del store para actualizar el valor cada vez que cambie
  counterStore.subscribeToCount((newCount: number) => {
    setCount(newCount);
  });

  // Estas son las funciones que se van a usar en el componente

  // Esta es para incrementar
  const increment = async (by: number) => {
    await counterService.increment(by);
  };

  // Esta es para decrementar
  const decrement = async (by: number) => {
    await counterService.decrement(by);
  };

  // Esta es para mostrar el estado
  const showState = async () => {
    await counterService.showState();
  }; */

  const createProduct = async (data: any) => {
    const { isError, isLoading, isSuccess, result } = await counterService.createProduct(data);
    return { isError, isLoading, isSuccess, result };
  }

  return {
    createProduct
  };
}
