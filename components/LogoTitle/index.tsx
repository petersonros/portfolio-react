import styles from "./LogoTitle.module.css";
import Image from "next/image";
import logo from "../../public/mainLogo.svg"

const LogoTitle = () => {
  return (
    <div className={styles.container}>
      <Image
        src={logo}
        alt="Logo"
        className={styles.logo}
        width={55}
        height={55}
        priority
      />
      <div className={styles.title}>Finanças</div>
    </div>
  );
};

export default LogoTitle;
