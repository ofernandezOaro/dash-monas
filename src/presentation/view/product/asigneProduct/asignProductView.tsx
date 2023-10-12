import { useState } from "preact/hooks";
import { Hr } from "../../../components/custom/hr/Hr";
import styles from "./AsigneProduct.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { Modal } from "../../../components/custom/modal/Moda";
import DI from "../../../../DI/ioc";

interface Inputs {
  number: number;
  user_email: string;
}

const AsignProductView = () => {
  const { state, getResult } = DI.resolve("AsignProductViewModel");
  const [resume, setResume] = useState(false);
  const [newData, setData] = useState<any>();

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      number: undefined,
      user_email: "",
    },
  });

  const sendData = async () => {
    getResult(newData);
  };

  const onSubmit: SubmitHandler<any> = async (data: any) => {
    setResume(true);
    setData(data);
  };

  return (
    <>
      <h1>Asignar Mona</h1>
      <Hr />
      <form
        className={styles.AsigneProductView_Form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.AsigneProductView_Inputs}>
          {/* NUMBER */}

          <label htmlFor="number">Numero de mona</label>
          <input
            id={"number"}
            type={"number"}
            {...register("number", { required: true })}
          />
          {errors.number && (
            <span className={styles.AsigneProductView_ErrorMessage}>
              This field is required
            </span>
          )}

          {/* EMAIL */}

          <label htmlFor="user_email">Email del comprador</label>
          <input
            id="user_email"
            type="email"
            {...register("user_email", { required: true })}
          />
          {errors.user_email && (
            <span className={styles.AsigneProductView_ErrorMessage}>
              This field is required
            </span>
          )}
        </div>

        {resume === true && (
          <Modal title="Resume" isClosable={() => setResume(false)} isOpened={resume}>
            <div className={styles.AsigneProductView_ResumeBox}>
              <div className={styles.AsigneProductView_Resume}>
                Numero de mona: {watch("number")}
              </div>
              <div className={styles.AsigneProductView_Resume}>
                Usuario: {watch("user_email")}
              </div>
            </div>
            <button
              disabled={state.isLoading}
              className={styles.AsigneProductView_Submit}
              onClick={sendData}
            >
              {state.isLoading ? "Cargando" : "Asignar"}
            </button>
          </Modal>
        )}
        <button
          disabled={state.isLoading}
          className={styles.AsigneProductView_Submit}
          type={"submit"}
        >
          Asignar
        </button>
      </form>
    </>
  );
};

export default AsignProductView;
