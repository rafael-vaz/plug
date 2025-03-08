import { ReactNode } from "react";

import styles from "./Wrapper.module.css";

interface IWrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: IWrapperProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
