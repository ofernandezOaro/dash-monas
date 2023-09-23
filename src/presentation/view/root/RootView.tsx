import { Link } from "react-router-dom";
import { Button } from "../../components/custom/button/Button";
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
        <LiList>Asignar Mona</LiList>
        <LiList>Asignar Contenido Exclusivo</LiList>
      </UlList>
      <Button>Click me!</Button>
    </div>
  );
};

export default RootView;
