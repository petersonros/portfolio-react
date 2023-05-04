import styles from "./Input.module.css";
import { Inputs } from "@/types/Inputs";

type Props = {
  inputs: Inputs[];
};

const Input = ({ inputs }: Props) => {
  return <input className={styles.input}>{}</input>;
};

export default Input;
