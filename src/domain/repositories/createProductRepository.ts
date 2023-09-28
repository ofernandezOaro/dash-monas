import { createProduct, asigneProduct, asigneContentProduct } from '../../infrastructure/dataSource/dataSource';
import productStore from '../../aplication/redux/product.store';
import { CreateProductEntity } from '../entities/productEntity';
import { ResultEntity } from '../entities/resultEntity';
import snackStore from '../../aplication/redux/snack.store';
class ProductRepository {

  public async updateUser(newName: string): Promise<void> {
    // call HTTP requests
    productStore.updateUser(newName);
  }

  public async showUser(): Promise<void> {
    // call HTTP requests
    return productStore.showUser();
  }

  public async createProduct(data: CreateProductEntity): Promise<ResultEntity> {
    const { isError, isLoading, isSuccess, result, res } = await createProduct(data);
    return { isError, isLoading, isSuccess, result, res };
  }

  public async asigneProduct(data: any): Promise<ResultEntity> {
    const { isError, isLoading, isSuccess, result, res } = await asigneProduct(data);
    return { isError, isLoading, isSuccess, result, res };
  }

  public async asigneContentProduct(data: any): Promise<ResultEntity> {
    const { isError, isLoading, isSuccess, result, res } = await asigneContentProduct(data);
    return { isError, isLoading, isSuccess, result, res };
  }

  public showMessage(message: string, type: string): void {
    snackStore.showMessage(message, type);
  }
}

export default new ProductRepository();
