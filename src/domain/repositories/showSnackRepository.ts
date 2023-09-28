import snackStore from '../../aplication/redux/snack.store';

class SnackRepository {
  public showMessage(message: string, type: string): void {
    snackStore.showMessage(message, type);
  }
}

export default new SnackRepository();
