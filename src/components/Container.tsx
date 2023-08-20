import { ReactNode } from "react";
import styles from "../scss/main.module.scss";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div>{children}</div>
    </div>
  );
};

export default Container;
