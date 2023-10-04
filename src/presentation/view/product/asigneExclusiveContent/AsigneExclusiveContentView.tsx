import AsigneExclusiveContentProduct from "./AsigneExclusiveContentViewModel";
import { Hr } from "../../../components/custom/hr/Hr";
import styles from "./AsigneExclusiveContent.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "preact/hooks";
import { Modal } from "../../../components/custom/modal/Moda";

type VersionType = "phoneVersion" | "tvVersion" | "watchVersion";

interface Inputs {
  artworkId: number;
  file: File;
  contentKey: VersionType;
}

const AsigneExclusiveContent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [resume, setResume] = useState(false);
  const [newData, setData] = useState(false);
  const { getResult, state } = AsigneExclusiveContentProduct();

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      artworkId: undefined,
      file: undefined,
      contentKey: undefined,
    },
  });

  const sendData = () => {
    getResult(newData);
  };

  const onSubmit: SubmitHandler<any> = async (data: any) => {
    console.log(data);
    setResume(true);
    setData(data);
  };

  const handleFileChange = (e: any) => {
    const file = e?.target?.files?.[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
    }
  };

  /*   const handleFileChangeTv = (e: any) => {
    const file = e?.target?.files?.[0];
    if (file) {
      setSelectedFileTv(file);
      setFileName({ ...fileName, fileNameTv: file.name });
    }
  };

  const handleFileChangePhone = (e: any) => {
    const file = e?.target?.files?.[0];
    if (file) {
      setSelectedFilePhone(file);
      setFileName({ ...fileName, fileNamePhone: file.name });
    }
  }; */

  return (
    <>
      <h1>Asignar Contenido exclusivo</h1>
      <Hr />
      <form
        className={styles.AsigneProductView_Form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.AsigneProductView_Inputs}>
          <label htmlFor="artworkId">Numero de monas</label>
          <input
            id="artworkId"
            type="artworkId"
            {...register("artworkId", { required: true })}
          />
          {errors.artworkId && (
            <span className={styles.AsigneProductView_ErrorMessage}>
              This field is required
            </span>
          )}

          {/* WATCH */}
          {selectedFile ? (
            <img
              width={"100px"}
              src={URL.createObjectURL(selectedFile)}
              alt="img"
            />
          ) : (
            <img
              width={"100px"}
              src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"
              alt="img"
            />
          )}
          <input
            {...register("file", { required: true })}
            type="file"
            onChange={handleFileChange}
          />
          {errors.file && (
            <span className={styles.AsigneProductView_ErrorMessage}>
              This field is required
            </span>
          )}

          <label htmlFor="contentKey">Version</label>
          <select {...register("contentKey", { required: true })}>
            <option value="">--Please choose an option--</option>
            <option value={"phoneVersion"}>Phone</option>
            <option value={"tvVersion"}>Tv</option>
            <option value={"watchVersion"}>Watch</option>
          </select>
          {errors.contentKey && (
            <span className={styles.CreateProductView_ErrorMessage}>
              This field is required
            </span>
          )}
        </div>

        {resume === true && (
          <Modal title="Resume" isClosable={() => setResume(false)}>
            <div className={styles.AsigneProductView_ResumeBox}>
              <div className={styles.AsigneProductView_Resume}>
                Numero de mona: {watch("artworkId")}
              </div>
              <div className={styles.AsigneProductView_Resume}>
                Content: {watch("contentKey")}
              </div>
              <div className={styles.AsigneProductView_Resume}>
                Image: {fileName}
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
          type="submit"
        >
          {state.isLoading ? "Cargando" : "Asignar"}
        </button>
      </form>
    </>
  );
};

export default AsigneExclusiveContent;
