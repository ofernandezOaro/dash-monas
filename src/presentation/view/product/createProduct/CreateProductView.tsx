import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./CreateProductView.module.scss";
import { Hr } from "../../../components/custom/hr/Hr";
import { useCombos } from "../../../../aplication/hooks/useCombos";
import { useEffect, useState } from "preact/hooks";
import { CreateProductEntity } from "../../../../domain/entities/productEntity";
import { Modal } from "../../../components/custom/modal/Moda";
import DI from "../../../../DI/ioc";

const CreateProductView = () => {
  const { state, getResult } = DI.resolve("CreateProductViewModel");
  const { accesorios, trajes, ojos, boca, sombrero, pelaje, fondo } =
    useCombos();
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileImage, setSelectedImage] = useState("");
  const [resume, setResume] = useState(false);
  const [newData, setData] = useState<any>();
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm<CreateProductEntity>({
    defaultValues: {
      number: undefined,
      user_email: "",
      file: undefined,
      traje: "",
      ojos: "",
      boca: "",
      sombrero: "",
      pelaje: "",
      fondo: "",
      accesorios: "",
    },
  });

  useEffect(() => {
    if (state.isSuccess) {
      setResume(false);
      reset();
      setSelectedFile(null);
      setSelectedImage("");
    }
  }, [state.isSuccess]);

  const sendData = () => {
    getResult(newData);
  };

  const onSubmit: SubmitHandler<CreateProductEntity> = async (data: any) => {
    setResume(true);
    setData(data);
  };

  const handleFileChange = (e: any) => {
    const file = e?.target?.files?.[0];
    if (file) {
      setSelectedFile(file);
      setSelectedImage(file.name);
    }
  };


  return (
    <>
    <h1>Crear Mona</h1>
      <Hr />
      <form
        className={styles.CreateProductView_Form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.CreateProductView}>
          <div className={styles.CreateProductView_Image}>
            {selectedFile ? (
              <img
                width={"300px"}
                src={URL.createObjectURL(selectedFile)}
                alt="img"
              />
            ) : (
              <img
                width={"300px"}
                src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"
                alt="img"
              />
            )}
            <input
              {...register("file")}
              type="file"
              onChange={handleFileChange}
            />
            <div className={styles.CreateProductView_ImageName}>
              {selectedFileImage}
            </div>
          </div>
          {errors.file && (
            <span className={styles.CreateProductView_ErrorMessage}>
              This field is required
            </span>
          )}

          <div className={styles.CreateProductView_Inputs}>
            <label htmlFor={"number"}>Número de Mona</label>
            <input
              {...register("number", { required: true })}
              type={"number"}
            />
            {errors.number && (
              <span className={styles.CreateProductView_ErrorMessage}>
                This field is required
              </span>
            )}

            <label htmlFor={"user_email"}>Email del comprador</label>
            <input {...register("user_email")} />
            {errors.user_email && (
              <span className={styles.CreateProductView_ErrorMessage}>
                This field is required
              </span>
            )}

            <label htmlFor="accesorios">Accesorios</label>
            <select {...register("accesorios", { required: true })}>
              <option value="">--Please choose an option--</option>
              {accesorios.map((item: any) => (
                <option key={item.value} value={item.value}>
                  {item.value}
                </option>
              ))}
            </select>
            {errors.accesorios && (
              <span className={styles.CreateProductView_ErrorMessage}>
                This field is required
              </span>
            )}

            <label htmlFor="traje">Traje</label>
            <select {...register("traje", { required: true })}>
              <option value="">--Please choose an option--</option>
              {trajes.map((item: any) => (
                <option key={item.value} value={item.value}>
                  {item.value}
                </option>
              ))}
            </select>
            {errors.traje && (
              <span className={styles.CreateProductView_ErrorMessage}>
                This field is required
              </span>
            )}

            <label htmlFor="ojos">Ojos</label>
            <select {...register("ojos", { required: true })}>
              <option value="">--Please choose an option--</option>
              {ojos.map((item: any) => (
                <option key={item.value} value={item.value}>
                  {item.value}
                </option>
              ))}
            </select>
            {errors.ojos && (
              <span className={styles.CreateProductView_ErrorMessage}>
                This field is required
              </span>
            )}

            <label htmlFor="boca">Boca</label>
            <select {...register("boca", { required: true })}>
              <option value="">--Please choose an option--</option>
              {boca.map((item: any) => (
                <option key={item.value} value={item.value}>
                  {item.value}
                </option>
              ))}
            </select>
            {errors.boca && (
              <span className={styles.CreateProductView_ErrorMessage}>
                This field is required
              </span>
            )}

            <label htmlFor="sombrero">Sombrero</label>
            <select {...register("sombrero", { required: true })}>
              <option value="">--Please choose an option--</option>
              {sombrero.map((item: any) => (
                <option key={item.value} value={item.value}>
                  {item.value}
                </option>
              ))}
            </select>
            {errors.sombrero && (
              <span className={styles.CreateProductView_ErrorMessage}>
                This field is required
              </span>
            )}

            <label htmlFor="pelaje">Pelaje</label>
            <select {...register("pelaje", { required: true })}>
              <option value="">--Please choose an option--</option>
              {pelaje.map((item: any) => (
                <option key={item.value} value={item.value}>
                  {item.value}
                </option>
              ))}
            </select>
            {errors.pelaje && (
              <span className={styles.CreateProductView_ErrorMessage}>
                This field is required
              </span>
            )}

            <label htmlFor="fondo">Fondo</label>
            <select {...register("fondo", { required: true })}>
              <option value="">--Please choose an option--</option>
              {fondo.map((item: any) => (
                <option key={item.value} value={item.value}>
                  {item.value}
                </option>
              ))}
            </select>
            {errors.fondo && (
              <span className={styles.CreateProductView_ErrorMessage}>
                This field is required
              </span>
            )}
          </div>
        </div>

        {resume && (
          <Modal title="Resume" isClosable={() => setResume(!resume)} isOpened={resume}>
            <div className={styles.CreateProductView_Resume}>
              Numero de mona: {watch("number")}
            </div>
            <div className={styles.CreateProductView_Resume}>
              Usuario: {watch("user_email")}
            </div>
            <div className={styles.CreateProductView_Resume}>
              <ul>
                <li>Ojos: {watch("ojos")}</li>
                <li>Boca: {watch("boca")}</li>
                <li>Traje: {watch("traje")}</li>
                <li>Sombrero: {watch("sombrero")}</li>
                <li>Pelaje: {watch("pelaje")}</li>
                <li>Fondo: {watch("fondo")}</li>
                <li>Accesorios: {watch("accesorios")}</li>
              </ul>
            </div>
            <button
              disabled={state.isLoading}
              className={styles.CreateProductView_Submit}
              onClick={sendData}
            >
              {state.isLoading ? "Cargando" : "Enviar"}
            </button>
          </Modal>
        )}

        <button
          disabled={state.isLoading}
          className={styles.CreateProductView_Submit}
          type="submit"
        >
          Enviar
        </button>
      </form>
    </>
  );
};

export default CreateProductView;
