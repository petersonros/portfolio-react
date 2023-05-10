import Image from "next/image";
import imgLogin from "@/public/login.svg";
import styles from "./Login.module.css";
import { Button } from "@/components/Button";
import LogoTitle from "@/components/LogoTitle";
import Input from "@/components/Input";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <LogoTitle />
        <Image
          alt="Login"
          className={styles.imgLogin}
          src={imgLogin}
          priority
        />
      </div>
      <div className={styles.loginContainer}>
      <span className={styles.title}>Entrar</span>
        <Input
          placeholder="Digite seu e-mail"
          type="email"
          id="email"
          name="email"
          required
        />
        <Input
          placeholder="Digite sua Senha"
          type="passoword"
          id="email"
          name="email"
          required
        />
        <Button label="Enviar" src="/main" />
      </div>
    </div>
  );
};

export default Login;
