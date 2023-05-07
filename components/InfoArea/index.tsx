import styles from "./InfoArea.module.css";

const InfoArea = () => {
  return (
    <div className={styles.container}>
      <div className={styles.monthArea}>
        <div className={styles.monthArrow}>⬅️</div>
        <div className={styles.monthTitle}>
          Exibir aqui o mês currente
        </div>
        <div className={styles.monthArrow}>️➡️</div>
      </div>
      <div className={styles.resumeArea}>
        componentes ResumeItem vão aqui.
      </div>
    </div>
  )
}

export default InfoArea;