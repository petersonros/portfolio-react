import { ReactElement } from "react";
import styles from "./Layout.module.css";

type Props = {
  children: ReactElement;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Exemplo de Layout</h1>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>Peterson R - 2023</footer>
    </div>
  );
};
