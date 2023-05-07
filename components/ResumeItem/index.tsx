import styles from "./ResumeItem.module.css";

const ResumeItem = () => {
  return (
    <div className={styles.resumeItem}>
      <div className={styles.resumeItem__title}>Title</div>
      <div className={styles.resumeItem__info}>Info</div>
    </div>
  );
};

export default ResumeItem;
