import { ReactElement } from "react";
import styles from "./Layout.module.css";
import LogoTitle from "../LogoTitle";

type Props = {
  children: ReactElement;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <LogoTitle />
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>Peterson R - 2023</footer>
    </div>
  );
};
