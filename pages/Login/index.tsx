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
        <Input
          placeholder="Digite seu e-mail"
          type="email"
          id="email"
          name="email"
          required
        />
        <Input
          placeholder="Digite sua Senha"
          type="email"
          id="email"
          name="email"
          required
        />
        <Input
          placeholder="Repita sua senha"
          type="email"
          id="email"
          name="email"
          required
        />
        <Button label="Enviar" />
      </div>
    </div>
  );
};

export default Login;
