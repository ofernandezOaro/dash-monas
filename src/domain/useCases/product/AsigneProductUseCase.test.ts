import CreateProdutUseCase from "./CreateProductUseCase";
import AsignProductUseCase from "./AsigneProductUseCase";
import AsigneContentProductUseCase from "./AsignExclusiveContentProductCase";

describe("Product Tests Use Cases", () => {
  test("should return the correct response", async () => {
    // Arrange
    const mockProductRepository = {
      CreateProductRepository: {
        updateUser: jest.fn(),
        showUser: jest.fn(),
        createProduct: jest.fn().mockResolvedValue({
          isError: false,
          isLoading: false,
          isSuccess: true,
          result: {},
          res: {},
        }),
        showMessage: jest.fn(),
      },
      AsigneProductRepository: {
        asigneProduct: jest.fn().mockResolvedValue({
          isError: false,
          isLoading: false,
          isSuccess: true,
          result: {},
          res: {},
        }),
      },
      AsigneExclusiveContentProductRepository: {
        asigneContentProduct: jest.fn().mockResolvedValue({
          isError: false,
          isLoading: false,
          isSuccess: true,
          result: {},
          res: {},
        }),
      },
    };
    const useCaseCreateProduct = CreateProdutUseCase(mockProductRepository);
    const useCaseAsigneProduct = AsignProductUseCase(mockProductRepository);
    const useCaseAsigneContentProduct = AsigneContentProductUseCase(
      mockProductRepository
    );

    // Act
    // Here we pass the init args, see toHaveBeenCalledWith
    const resultCreateProduct = await useCaseCreateProduct.createProduct({});
    const resultAsigneProduct = await useCaseAsigneProduct.asigneProduct({});
    const resultAsigneContentProduct =
      await useCaseAsigneContentProduct.asigneContentProduct({});

    // Assert
    expect(resultCreateProduct).toEqual({
      isError: false,
      isLoading: false,
      isSuccess: true,
      result: {},
      res: {},
    });
    expect(
      mockProductRepository.CreateProductRepository.createProduct
    ).toHaveBeenCalledWith({});

    expect(resultAsigneProduct).toEqual({
      isError: false,
      isLoading: false,
      isSuccess: true,
      result: {},
      res: {},
    });
    expect(
      mockProductRepository.AsigneProductRepository.asigneProduct
    ).toHaveBeenCalledWith({});

    expect(resultAsigneContentProduct).toEqual({
      isError: false,
      isLoading: false,
      isSuccess: true,
      result: {},
      res: {},
    });
    expect(
      mockProductRepository.AsigneExclusiveContentProductRepository
        .asigneContentProduct
    ).toHaveBeenCalledWith({});
  });

  it("should handle errors correctly", async () => {
    // Arrange
    const mockProductRepository = {
      CreateProductRepository: {
        updateUser: jest.fn(),
        showUser: jest.fn(),
        createProduct: jest.fn().mockResolvedValue({
          isError: true,
          isLoading: false,
          isSuccess: false,
          result: {},
          res: {},
        }),
        showMessage: jest.fn(),
      },
      AsigneProductRepository: {
        asigneProduct: jest.fn().mockResolvedValue({
          isError: true,
          isLoading: false,
          isSuccess: false,
          result: {},
          res: {},
        }),
      },
      AsigneExclusiveContentProductRepository: {
        asigneContentProduct: jest.fn().mockResolvedValue({
          isError: true,
          isLoading: false,
          isSuccess: false,
          result: {},
          res: {},
        }),
      },
    };
    const useCaseCreateProduct = CreateProdutUseCase(mockProductRepository);
    const useCaseAsigneProduct = AsignProductUseCase(mockProductRepository);
    const useCaseAsigneContentProduct = AsigneContentProductUseCase(
      mockProductRepository
    );

    // Act
    const resultCreateProduct = await useCaseCreateProduct.createProduct({});
    const resultAsigneProduct = await useCaseAsigneProduct.asigneProduct({});
    const resultAsigneContentProduct =
      await useCaseAsigneContentProduct.asigneContentProduct({});

    // Assert
    expect(resultCreateProduct).toEqual({
      isError: true,
      isLoading: false,
      isSuccess: false,
      result: {},
      res: {},
    });
    expect(
      mockProductRepository.CreateProductRepository.createProduct
    ).toHaveBeenCalledWith({});

    expect(resultAsigneProduct).toEqual({
      isError: true,
      isLoading: false,
      isSuccess: false,
      result: {},
      res: {},
    });
    expect(
      mockProductRepository.AsigneProductRepository.asigneProduct
    ).toHaveBeenCalledWith({});

    expect(resultAsigneContentProduct).toEqual({
      isError: true,
      isLoading: false,
      isSuccess: false,
      result: {},
      res: {},
    });
    expect(
      mockProductRepository.AsigneExclusiveContentProductRepository
        .asigneContentProduct
    ).toHaveBeenCalledWith({});
  });
});
