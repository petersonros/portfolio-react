import Image from "next/image";
import mainLogo from "../../public/mainLogo.svg"
import imgLogin from "../../public/login.svg"
import styles from "./Login.module.css";
import { Button } from "@/components/Button";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <div className={styles.logoContainer}>
          <Image className={styles.imgLogo} src={mainLogo} alt="Logo" />
          <h1 className={styles.loginTitle}>Finanças</h1>
        </div>
        <Image
          alt="Login"
          className={styles.imgLogin}
          src={imgLogin}
          priority
        />
      </div>
      <form className={styles.formArea}>
        <label className={styles.label} htmlFor="email">
          Seu e-mail:
        </label>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          required
        />
        <span className={styles.alert}>E-mail não encontrado.</span>
        <label className={styles.label} htmlFor="password">
          Sua senha:
        </label>
        <input
          className={styles.input}
          type="password"
          id="password"
          name="password"
          required
        />
        <span className={styles.alert}>Senha não encontrada.</span>
        <Button
          label={"Login"}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </form>
    </div>
  );
};

export default Login;
