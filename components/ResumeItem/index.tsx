import styles from "./ResumeItem.module.css";

type Props = {
  title: string;
  value: number;
  color?: string;
};

const ResumeItem = ({ title, value, color }: Props) => {
  return (
    <div className={styles.resumeItem}>
      <div className={styles.resumeItem__title}>{title}</div>
      <div className={`${styles.resumeItem__info} ${color && styles[color]}`}>
        R$ {value}
      </div>
    </div>
  );
};

export default ResumeItem;
