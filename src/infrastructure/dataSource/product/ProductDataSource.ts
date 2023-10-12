import { CreateProductEntity } from "../../../domain/entities/productEntity";

interface Res {
    isError: boolean, isLoading: boolean, isSuccess: boolean, result: any, res: any
}

export interface ProductDataSource {
    ProductDataSource: {
        createProduct: (data: CreateProductEntity) => Promise<Res>;
        asigneProduct: (data: any) => Promise<Res>;
        asigneContentProduct: (data: any) => Promise<Res>;
    }
}

