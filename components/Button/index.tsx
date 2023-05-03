import styles from "./Button.module.css";

type Props = {
  label: string;
  onClick: () => void;
};

export const Button = ({ label, onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.myBtn}>
      {label}
    </button>
  );
};
