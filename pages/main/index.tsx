import styles from "./Main.module.css";
import InfoArea from "@/components/InfoArea";

const main = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.headerText}>Finanças</h1>
      </header>
      <div className={styles.body}>
        <InfoArea />
        <div className={styles.ImputArea}></div>
        <div className={styles.TableArea}></div>
      </div>
    </div>
  );
};

export default main;
