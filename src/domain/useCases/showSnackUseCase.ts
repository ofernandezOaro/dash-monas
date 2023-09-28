interface SnackRepositoryInterface {
  showMessage(message: string, type: string): void;
}
export default class SnackServicesUseCases {
  constructor(protected snackRepository: SnackRepositoryInterface) { }

  public showMessage(message: string, type: string): void {
    return this.snackRepository.showMessage(message, type);
  }
}
