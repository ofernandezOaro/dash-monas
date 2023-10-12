import { useState } from "preact/hooks";
import useCreateProduct from "../../../../aplication/hooks/useCreateProduct";
import { CreateProductEntity } from "../../../../domain/entities/productEntity";
import useSnack from "../../../../aplication/hooks/useSnack";
import { CreateProductUseCaseInteface } from "../../../../domain/useCases/product/ProductUseCaseInterfaces";

const CreateProductViewModel = ({CreateProductUseCase}: CreateProductUseCaseInteface) => {
  const { createProduct, updateUser, user, showUser } = useCreateProduct({CreateProductUseCase});
  const { showMessage } = useSnack();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [result, setResult] = useState<null>(null);

  const getResult = async (data: CreateProductEntity) => {
    setIsLoading(true);
    await createProduct(data)
      .then((res) => {
        if (res.isSuccess === true) {
          setIsSuccess(res.isSuccess);
          setResult(res.result);
          updateUser(res.result.user);
          setIsError(res.isError);
          setIsLoading(res.isLoading);
          showMessage(res.res.status, "success");
        } else {
          setIsError(res.isError);
          setIsSuccess(res.isSuccess);
          setIsLoading(res.isLoading);
          showMessage(res.res.status, "error");
        }
      })
      .catch((error) => {
        throw error;
      });

  };

  return {
    state: { isLoading, isSuccess, isError },
    result,
    getResult,
    user,
    updateUser,
    showUser
  }
}

export default CreateProductViewModel