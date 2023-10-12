import { useState } from "preact/hooks";
import useSnack from "../../../../aplication/hooks/useSnack";
import useAsigneContentProduct from "../../../../aplication/hooks/useAsigneContentProduct";
import { AsigneExclusiveContentProductUseCaseInteface } from "../../../../domain/useCases/product/ProductUseCaseInterfaces";

const AsigneExclusiveContent = ({AsigneExclusiveContentProductUseCase}: AsigneExclusiveContentProductUseCaseInteface) => {
  const { asigneContentProduct } = useAsigneContentProduct({AsigneExclusiveContentProductUseCase});
  const { showMessage } = useSnack();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [result, setResult] = useState<null>(null);

  const getResult = async (data: any) => {
    setIsLoading(true);
    await asigneContentProduct(data)
      .then((res: any) => {
        console.log(res);
        if (res.isSuccess === true) {
          setIsSuccess(res.isSuccess);
          setResult(res.result);
          setIsError(res.isError);
          setIsLoading(res.isLoading);
          showMessage(res.res?.status, "success");
        } else {
          setIsError(res.isError);
          setIsSuccess(res.isSuccess);
          setIsLoading(res.isLoading);
          showMessage(res.res?.status, "error");
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
  };
};

export default AsigneExclusiveContent;
