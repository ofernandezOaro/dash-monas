import styles from "./MainLayout.module.scss";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props): JSX.Element => {
  return <div className={styles.container}>{children}</div>;
};

export default MainLayout;
