import { createContainer, asFunction, asValue } from "awilix";

// REPOSITORIES
import CreateProductRepositoryImpl from "../domain/repositories/product/CreateProductRepositoryImpl";
import AsigneProductRepositoryImpl from "../domain/repositories/product/AsigneProductRepositoryImpl";
import AsigneExclusiveContentProductRepositoryImpl from "../domain/repositories/product/AsigneExclusivecContentProductRepositoryImpl";

// USES CASES
import CreateProductUseCase from "../domain/useCases/product/CreateProductUseCase";
import AsigneProductUseCase from "../domain/useCases/product/AsigneProductUseCase";
import AsigneExclusiveContentProductUseCase from "../domain/useCases/product/AsignExclusiveContentProductCase";

// VIEW MODELS
import CreateProductViewModel from "../presentation/view/product/createProduct/CreateProductViewModel";
import AsignProductViewModel from "../presentation/view/product/asigneProduct/asignProductViewModel";
import AsigneExclusiveContent from "../presentation/view/product/asigneExclusiveContent/AsigneExclusiveContentViewModel";

// DATA SOURCES
/* import * as ProductDataSource from "../infrastructure/dataSource/dataSource"; */
import * as ProductRemoteDataSourceImpl from "../infrastructure/dataSource/product/ProductRemoteDataSourceImpl";

// CREATE CONTAINER
const container = createContainer();

container.register({
  // REPOSITORIES
  CreateProductRepository: asFunction(CreateProductRepositoryImpl),
  AsigneProductRepository: asFunction(AsigneProductRepositoryImpl),
  AsigneExclusiveContentProductRepository: asFunction(
    AsigneExclusiveContentProductRepositoryImpl
  ),

  // USES CASES
  CreateProductUseCase: asFunction(CreateProductUseCase),
  AsigneProductUseCase: asFunction(AsigneProductUseCase),
  AsigneExclusiveContentProductUseCase: asFunction(
    AsigneExclusiveContentProductUseCase
  ),

  // VIEW MODELS
  CreateProductViewModel: asFunction(CreateProductViewModel),
  AsignProductViewModel: asFunction(AsignProductViewModel),
  AsigneExclusiveContent: asFunction(AsigneExclusiveContent),

  // DATA SOURCES
  // CHANGE DATA SOURCE DEPEND ON ENVIRONMENT OR SOMETHING ELSE
  // COULD BE ProductRemoteDataSource / ProductLocalDataSource / ProductMockDataSource
  ProductDataSource: asValue(ProductRemoteDataSourceImpl),
});

export default container;
