interface ProductRepositoryInterface {
  /* increment(by: number): Promise<void>;
  decrement(by: number): Promise<void>;
  showState(): Promise<void>; */
  createProduct(product: any): Promise<{ isError: boolean; isLoading: boolean; isSuccess: boolean; result: null; }>;
}

export default class ProductServicesUseCases {
  constructor(protected counterRepository: ProductRepositoryInterface) { }

  /* public async increment(by: number): Promise<void> {
    return this.counterRepository.increment(by);
  }

  public async decrement(by: number): Promise<void> {
    return this.counterRepository.decrement(by);
  }

  public async showState(): Promise<void> {
    return this.counterRepository.showState();
  } */

  public async createProduct(data: any): Promise<{ isError: boolean; isLoading: boolean; isSuccess: boolean; result: null; }> {
    const { isError, isLoading, isSuccess, result } = await this.counterRepository.createProduct(data);
    return { isError, isLoading, isSuccess, result };
  }
}
