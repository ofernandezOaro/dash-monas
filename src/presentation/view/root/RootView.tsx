import { Link } from "react-router-dom";
import { LiList } from "../../components/custom/list/LiList";
import { UlList } from "../../components/custom/list/UlList";
import styles from "./RootView.module.scss";

const RootView = () => {
  return (
    <div className={styles.RowView}>
      <UlList>
        <Link to={"/dashboard"}>
          <LiList>Crear Mona</LiList>
        </Link>
        <Link to={"/asignar-producto"}>
          <LiList>Asignar Mona</LiList>
        </Link>
        <Link to={"/exclusive-content"}>
          <LiList>Asignar Contenido Exclusivo</LiList>
        </Link>
      </UlList>
    </div>
  );
};

export default RootView;
