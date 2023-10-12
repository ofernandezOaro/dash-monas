import { ProductDataSource } from '../../../infrastructure/dataSource/product/ProductDataSource';
import { ResultEntity } from '../../entities/resultEntity';
import { ProductRepository } from './ProductRepositoryInterface';

const AsigneExclusiveContentProductRepositoryImpl = ({ProductDataSource}: ProductDataSource): ProductRepository["AsigneExclusiveContentProductRepository"] => {

  const asigneContentProduct = async (data: any): Promise<ResultEntity> => {
    const { isError, isLoading, isSuccess, result, res } = await ProductDataSource.asigneContentProduct(data);
    return { isError, isLoading, isSuccess, result, res };
  }

  return {
    asigneContentProduct
  }

}
export default AsigneExclusiveContentProductRepositoryImpl;