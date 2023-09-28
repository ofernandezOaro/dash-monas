import reduxStore from "./store";
import { showMessage } from "./slices/snacks";
import { getValidationError } from "../../utilities/get-validation-code-status";

// EN ESTE CASO ES PARA LLAMAR A UN SNACKBAR PERO PARA UN ESTADO COMO UN CONTADOR O UN USARIO 
// PODRÍAMOS LLAMARLO DESDE OTRO SERVICIO COMO LOCALSTORAGE O MOBX

class SnacksStore {
  public subscribeToProduct(callback: Function) {
    reduxStore.subscribe(() => {
      callback(reduxStore.getState().snacks);
    });
  }

  public showMessage(message: string, type: any) {
    reduxStore.dispatch(
      showMessage({
        message: getValidationError(message),
        type: type
      })
    );
  }
}

export default new SnacksStore();