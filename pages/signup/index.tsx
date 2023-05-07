import Image from "next/image";
import imgSignup from "@/public/signup.svg";
import styles from "./Signup.module.css";
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
          src={imgSignup}
          priority
        />
      </div>
      <div className={styles.loginContainer}>
        <span className={styles.title}>Registrar</span>
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
          placeholder="Confirme sua senha"
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
