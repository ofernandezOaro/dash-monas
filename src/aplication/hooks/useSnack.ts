import reduxStore from "../../aplication/redux/store";
import SnackServicesUseCases from "../../domain/useCases/showSnackUseCase";
import showSnackRepository from "../../domain/repositories/showSnackRepository";

const snackService = new SnackServicesUseCases(showSnackRepository);

const useSnack = () => {
  reduxStore.subscribe(() => {
    /* console.log("Se ejecuta aqui"); */
  })

  const showMessage = async (message: string, type: string) => {
    await snackService.showMessage(message, type);
  }

  return { showMessage }

}

export default useSnack