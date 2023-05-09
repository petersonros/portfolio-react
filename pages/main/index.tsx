import styles from "./Main.module.css";
import InputArea from "@/components/InputArea";
import InfoArea from "@/components/InfoArea";
import TableArea from "@/components/TableArea";
import { Item } from "@/types/Item";
import { Category } from "@/types/Category";
import { categories } from "@/data/categories";
import { items } from "@/data/items";
import { useState, useEffect } from "react";
import { getCurrentMonth, filterListByMouth } from "@/helpers/dateFilter";

const main = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  const [category, setCategory] = useState(categories[0]);

  useEffect(() => {
    setFilteredList(filterListByMouth(list, currentMonth));
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  return (
    <div className={styles.main}>
      <header className={styles.main__header}>
        <h1 className={styles.main__headerText}>Finanças</h1>
      </header>
      <div className={styles.main__body}>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
        />
        <InputArea />
        <TableArea list={filteredList} />
      </div>
    </div>
  );
};

export default main;
