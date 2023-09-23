import { useState } from "preact/hooks";
import useCreateProduct from "../../../../aplication/hooks/useCreateProduct";

const CreateProductViewModel = () => {
  const { createProduct } = useCreateProduct();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [result, setResult] = useState<null>(null);

  const getResult = async (data: any) => {
    await createProduct(data)
      .then((res) => {
        if (res.isSuccess === true) {
          setIsSuccess(res.isSuccess);
          setResult(res.result);
          setIsError(res.isError);
          setIsLoading(res.isLoading);
        } else {
          setIsError(res.isError);
          setIsSuccess(res.isSuccess);
          setIsLoading(res.isLoading);
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  return {
    isLoading,
    isSuccess,
    isError,
    result,
    getResult
  }
}

export default CreateProductViewModel