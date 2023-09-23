import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./CreateProductView.module.scss";
import { Hr } from "../../../components/custom/hr/Hr";
import { useCombos } from "../../../../aplication/hooks/useCombos";
import { useEffect, useState } from "preact/hooks";
import CreateProductViewModel from "./CreateProductViewModel";

type Inputs = {
  number: number;
  user_email: string;
  file: File;
  traje: string;
  ojos: string;
  boca: string;
  sombrero: string;
  pelaje: string;
  fondo: string;
  accesorios: string;
};

const CreateProductView = () => {
  const { isError, isLoading, isSuccess, result, getResult } =
    CreateProductViewModel();
  const { accesorios, trajes, ojos, boca, sombrero, pelaje, fondo } =
    useCombos();
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileImage, setSelectedImage] = useState("");
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
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

  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    getResult(data);
  };

  const handleFileChange = (e: any) => {
    const file = e?.target?.files?.[0];
    if (file) {
      setSelectedFile(file);
      setSelectedImage(file.name);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
      setSelectedFile(null);
      setSelectedImage("");
    }
  }, [result]);

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
            <input {...register("user_email", { required: true })} />
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
        <div className={styles.CreateProductView_Form}>
          <button
            disabled={isLoading}
            className={styles.CreateProductView_Submit}
            type="submit"
          >
            {isLoading ? "Cargando" : "Enviar"}
          </button>
          {isSuccess && <p>¡Enviado!</p>}
          {isError && <p>¡Ha ocurrido un problema, inténtalo más tarde!</p>}
        </div>
      </form>
    </>
  );
};

export default CreateProductView;

{
  /* <SelectInput
              name={accesorios}
              label={"Accesorios"}
              htmlFor={"accesorios"}
              registerName={"accesorios"}
              className={styles.CreateProductView_ErrorMessage}
            />
            <SelectInput
              name={trajes}
              label={"Traje"}
              htmlFor={"traje"}
              registerName={"traje"}
              className={styles.CreateProductView_ErrorMessage}
            />
            <SelectInput
              name={ojos}
              label={"Ojos"}
              htmlFor={"ojos"}
              registerName={"ojos"}
              className={styles.CreateProductView_ErrorMessage}
            />
            <SelectInput
              name={boca}
              label={"Boca"}
              htmlFor={"boca"}
              registerName={"boca"}
              className={styles.CreateProductView_ErrorMessage}
            />
            <SelectInput
              name={sombrero}
              label={"Sombrero"}
              htmlFor={"sombrero"}
              registerName={"sombrero"}
              className={styles.CreateProductView_ErrorMessage}
            />
            <SelectInput
              name={pelaje}
              label={"Pelaje"}
              htmlFor={"pelaje"}
              registerName={"pelaje"}
              className={styles.CreateProductView_ErrorMessage}
            />
            <SelectInput
              name={fondo}
              label={"Fondo"}
              htmlFor={"fondo"}
              registerName={"fondo"}
              className={styles.CreateProductView_ErrorMessage}
            /> */
}
