import productStore from '../../../aplication/redux/product.store';
import { CreateProductEntity } from '../../entities/productEntity';
import { ResultEntity } from '../../entities/resultEntity';
import snackStore from '../../../aplication/redux/snack.store';
import {ProductRepository} from './ProductRepositoryInterface';
import { ProductDataSource } from '../../../infrastructure/dataSource/product/ProductDataSource';

const CreateProductRepositoryImpl = ({ProductDataSource}: ProductDataSource): ProductRepository["CreateProductRepository"] => {

  const createProduct = async (data: CreateProductEntity): Promise<ResultEntity> => {
    const { isError, isLoading, isSuccess, result, res } = await ProductDataSource.createProduct(data);
    return { isError, isLoading, isSuccess, result, res };
  }
  
  const updateUser = async (newName: string): Promise<void> => {
    // call HTTP requests
    productStore.updateUser(newName);
  }

  const showUser = async (): Promise<void> => {
    // call HTTP requests
    return productStore.showUser();
  }

  const showMessage = (message: string, type: string): void => {
    snackStore.showMessage(message, type);
  }

  return {
    updateUser,
    showUser,
    createProduct,
    showMessage
  }

}
export default CreateProductRepositoryImpl;