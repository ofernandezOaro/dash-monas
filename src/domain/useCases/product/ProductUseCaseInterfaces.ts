import { ResultEntity } from "../../entities/resultEntity";

export interface ProductServicesUseCasesInterface {
  ProductServicesUseCases: {
    createProduct(data: any): Promise<ResultEntity>;
    asigneProduct(data: any): Promise<ResultEntity>;
    asigneContentProduct(data: any): Promise<ResultEntity>;
  }
}

export interface CreateProductUseCaseInteface{
  CreateProductUseCase: {
    showUser(): Promise<void>;
    updateUser(newName: string): Promise<void>;
    showMessage(message: string, type: string): void;
    createProduct(data: any): Promise<ResultEntity>;
  }
}
  
export interface AsigneProductUseCaseInteface{
  AsigneProductUseCase: {
    asigneProduct(data: any): Promise<ResultEntity>;
  }
}
  
export interface AsigneExclusiveContentProductUseCaseInteface{
  AsigneExclusiveContentProductUseCase: {
    asigneContentProduct(data: any): Promise<ResultEntity>;
  }
}