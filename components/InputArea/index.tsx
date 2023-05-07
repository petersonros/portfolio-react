import styles from "./InputArea.module.css";

const InputArea = () => {
  return(
    <div className={styles.inputArea}>
      <div className={styles.inputArea__label}>
        <div className={styles.inputArea__title}>Data</div>
        <input className={styles.inputArea__input}></input>
      </div>

      <div className={styles.inputArea__label}>
        <div className={styles.inputArea__title}>Categoria</div>
        <input className={styles.inputArea__input}></input>
      </div>

      <div className={styles.inputArea__label}>
        <div className={styles.inputArea__title}>Título</div>
        <input className={styles.inputArea__input}></input>
      </div>

      <div className={styles.inputArea__label}>
        <div className={styles.inputArea__title}>valor</div>
        <input className={styles.inputArea__input}></input>
      </div>

      <div className={styles.inputArea__label}>
        <div className={styles.inputArea__title}>&nbsp;</div>
        <button className={styles.inputArea__button} >Adicionar</button>
      </div>
    </div>
  )
}

export default InputArea;