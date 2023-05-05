import Image from "next/image";
import styles from "./Home.module.css";
import { Button } from "@/components/Button";
import imgMainLogo from "../../public/mainLogo.svg";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftArea}>
        <span className={styles.title}>Finanças</span>
        <Image
          alt="Imagen do Logo"
          src={imgMainLogo}
          height={180}
          width={180}
        />
      </div>
      <div className={styles.rightArea}>
        <span className={styles.title}>Bem vindo!</span>
        <span className={styles.text}>Gerencie ganhos e despesas.</span>
        <div className={styles.buttonArea}>
          <Button label="Entrar" />
          <Button label="Registrar" />
        </div>
      </div>
    </div>
  );
};

export default Home;
