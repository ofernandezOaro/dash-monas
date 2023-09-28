import reduxStore from "./store";
import { REDUX_MUTATION_USER } from "./product.store.redux";
import { showMessage } from "./slices/snacks";

class ProductStore {
  public subscribeToProduct(callback: Function) {
    reduxStore.subscribe(() => {
      callback(reduxStore.getState().productReducer.user);
    });
    reduxStore.subscribe(() => {
      callback(reduxStore.getState().snacks);
    });
  }

  public updateUser(newName: string) {
    reduxStore.dispatch({ type: REDUX_MUTATION_USER, payload: { newName } });
    reduxStore.dispatch(
      showMessage({
        message: "Usuario actualizado",
        type: "success"
      })
    );
  }

  public showUser() {
    return reduxStore.getState().productReducer.name;
  }

  public showState() {
    console.log(reduxStore.getState());
  }

  public showMessage(message: string, type: any) {
    reduxStore.dispatch(
      showMessage({
        message: message,
        type: type
      })
    );
  }
}

export default new ProductStore();