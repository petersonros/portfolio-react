import styles from "./Button.module.css";
import Link from "next/link";

type Props = {
  label: string;
  src?: string;
  onClick?: () => void;
};

export const Button = ({ label, src, onClick }: Props) => {
  if (src) {
    return (
      <Link className={styles.myBtn} href={src}>
        {label}
      </Link>
    );
  } else {
    return (
      <button onClick={onClick} className={styles.myBtn}>
        {label}
      </button>
    );
  }
};
