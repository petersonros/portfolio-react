import styles from "./Teste.module.css";
import Input from "@/components/Input";

const Teste = () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Título</h1>
      <p className={styles.p}>Um paragrafo de Teste</p>
      <Input />
    </div>
  );
};

export default Teste;
