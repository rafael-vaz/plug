import { ReactNode } from "react";

import styles from "./PageContent.module.css";

interface IPageContentProps {
  children: ReactNode;
}

const PageContent = ({ children }: IPageContentProps) => {
  return <div className={styles.pageContent}>{children}</div>;
};

export default PageContent;
