import styles from "./Input.module.css";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...props }: InputProps) => {
  return <input className={styles.input} {...props} />;
};

export default Input;
