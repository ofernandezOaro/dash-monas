import { CreateProductEntity } from "../entities/productEntity";
import { ResultEntity } from "../entities/resultEntity";

interface ProductRepositoryInterface {
  updateUser(newName: string): Promise<void>;
  showUser(): Promise<void>;
  createProduct(product: CreateProductEntity): Promise<ResultEntity>;
  asigneProduct(product: any): Promise<ResultEntity>;
  asigneContentProduct(product: any): Promise<ResultEntity>;
  showMessage(message: string, type: string): void;
}
export default class ProductServicesUseCases {
  constructor(protected productRepository: ProductRepositoryInterface) { }

  public async showUser(): Promise<void> {
    return this.productRepository.showUser();
  }

  public async updateUser(newName: string): Promise<void> {
    return this.productRepository.updateUser(newName);
  }

  public async createProduct(data: any) {
    const { isError, isLoading, isSuccess, result, res } = await this.productRepository.createProduct(data);
    return { isError, isLoading, isSuccess, result, res };
  }

  public async asigneProduct(data: any) {
    const { isError, isLoading, isSuccess, result, res } = await this.productRepository.asigneProduct(data);
    return { isError, isLoading, isSuccess, result, res };
  }

  public async asigneContentProduct(data: any) {
    const { isError, isLoading, isSuccess, result, res } = await this.productRepository.asigneContentProduct(data);
    return { isError, isLoading, isSuccess, result, res };
  }
}
