import { createProduct } from '../../infrastructure/dataSource/dataSource';


class CounterRepository {
  constructor() { }

  /* public async getCount(): Promise<number> {
    // call HTTP requests
    // or get count in store (cache)
    return counterStore.getCount();
  }

  public async increment(by: number): Promise<void> {
    // call HTTP requests

    // increment count in store
    counterStore.setCount(counterStore.getCount() + by);
  }

  public async decrement(by: number): Promise<void> {
    // call HTTP requests

    // decrement count in store
    counterStore.setCount(counterStore.getCount() - by);
  }

  public async showState(): Promise<void> {
    // call HTTP requests

    // decrement count in store
    counterStore.setCount(counterStore.getCount());
  } */


  public async createProduct(data: any): Promise<{ isError: boolean; isLoading: boolean; isSuccess: boolean; result: any; }> {
    const { isError, isLoading, isSuccess, result } = await createProduct(data);

    return { isError, isLoading, isSuccess, result };
  }
}

export default new CounterRepository();
