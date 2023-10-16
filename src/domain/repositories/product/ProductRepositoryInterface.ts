import { CreateProductEntity } from "../../entities/productEntity";
import { ResultEntity } from "../../entities/resultEntity";

export interface ProductRepository {
  CreateProductRepository: {
    updateUser: (newName: string) => Promise<void>;
    showUser: () => Promise<void>;
    createProduct: (data: CreateProductEntity) => Promise<ResultEntity>;
    showMessage: (message: string, type: string) => void;
  };
  AsigneProductRepository: {
    asigneProduct: (product: any) => Promise<ResultEntity>;
  };
  AsigneExclusiveContentProductRepository: {
    asigneContentProduct: (product: any) => Promise<ResultEntity>;
  };
}
