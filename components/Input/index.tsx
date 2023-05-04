import styles from "./Input.module.css";

type Props = {
  label: string;
  type: string;
  placeholder: string;
};

const Input = ({ label, type, placeholder }: Props) => {
  return (
    <input className={styles.input}>
      {label}, {type}, {placeholder},
    </input>
  );
};

export default Input;
