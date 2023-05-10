import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/Button";
import imgHomeLogo from "@/public/mainLogo.svg";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__leftArea}>
        <span className={styles.home__title}>Finanças</span>
        <Image
          alt="Imagen do Logo"
          className={styles.home__logo}
          src={imgHomeLogo}
          height={160}
          width={160}
        />
      </div>
      <div className={styles.home__rightArea}>
        <span className={styles.home__title}>Bem vindo!</span>
        <span className={styles.home__text}>Gerencie ganhos e despesas.</span>
        <div className={styles.home__buttonArea}>
          <Button label="Entrar" src="/login" />
          <Button label="Registrar" src="/signup" />
        </div>
      </div>
    </div>
  );
};

export default Home;
