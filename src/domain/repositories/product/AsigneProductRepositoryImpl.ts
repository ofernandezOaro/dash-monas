import { ResultEntity } from '../../entities/resultEntity';
import { ProductRepository } from './ProductRepositoryInterface';
import { ProductDataSource } from '../../../infrastructure/dataSource/product/ProductDataSource';

const AsigneProductRepositoryImpl = ({ProductDataSource}: ProductDataSource): ProductRepository["AsigneProductRepository"] => {

  const asigneProduct = async (data: any): Promise<ResultEntity> => {
    const { isError, isLoading, isSuccess, result, res } = await ProductDataSource.asigneProduct(data);
    return { isError, isLoading, isSuccess, result, res };
  }

  return {
    asigneProduct,
  }

}
export default AsigneProductRepositoryImpl;