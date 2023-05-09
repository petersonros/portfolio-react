import InputArea from "@/components/InputArea";
import styles from "./Main.module.css";
import InfoArea from "@/components/InfoArea";
import TableArea from "@/components/TableArea";

const main = () => {
  return (
    <div className={styles.main}>
      <header className={styles.main__header}>
        <h1 className={styles.main__headerText}>Finanças</h1>
      </header>
      <div className={styles.main__body}>
        <InfoArea />
        <InputArea />
        <TableArea />
      </div>
    </div>
  );
};

export default main;
