import { useState } from "react";
import styles from "./InputArea.module.css";
import { Item } from "@/types/Item";
import { categories } from "@/data/categories";

type Props = {
  onAdd: (item: Item) => void;
};

const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState("");
  const [categoryField, setCategoryField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push("Data inválida!");
    }
    if (!categoryKeys.includes(categoryField)) {
      errors.push("Categoria inválida!");
    }
    if (titleField === "") {
      errors.push("Título vazio!");
    }
    if (valueField <= 0) {
      errors.push("Valor inválido!");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: new Date(dateField),
        category: categoryField,
        title: titleField,
        value: valueField,
      });
      clearFields();
    }
  };

  const clearFields = () => {
    setDateField("");
    setCategoryField("");
    setTitleField("");
    setValueField(0);
  };
  return (
    <div className={styles.inputArea}>
      <div className={styles.inputArea__label}>
        <div className={styles.inputArea__title}>Data</div>
        <input
          className={styles.inputArea__input}
          type="date"
          value={dateField}
          onChange={(e) => setDateField(e.target.value)}
        />
      </div>

      <div className={styles.inputArea__label}>
        <span className={styles.inputArea__title}>Categoria</span>

        <select
          className={styles.inputArea__input}
          value={categoryField}
          onChange={(e) => setCategoryField(e.target.value)}
        >
          <>
            <option value={""}> Selecione </option>
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>
                {categories[key].title}
              </option>
            ))}
          </>
        </select>
      </div>

      <div className={styles.inputArea__label}>
        <div className={styles.inputArea__title}>Título</div>
        <input
          className={styles.inputArea__input}
          type="text"
          value={titleField}
          onChange={(e) => setTitleField(e.target.value)}
        />
      </div>

      <div className={styles.inputArea__label}>
        <div className={styles.inputArea__title}>Valor</div>
        <input
          className={styles.inputArea__input}
          type="number"
          value={valueField}
          onChange={(e) => setValueField(parseFloat(e.target.value))}
        />
      </div>

      <div className={styles.inputArea__label}>
        <div className={styles.inputArea__title}>&nbsp;</div>
        <button className={styles.inputArea__button} onClick={handleAddEvent}>
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default InputArea;
