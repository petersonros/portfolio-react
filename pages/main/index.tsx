import styles from "./Main.module.css";
import InfoArea from "@/components/InfoArea";
import InputArea from "@/components/InputArea";
import TableArea from "@/components/TableArea";
import { Item } from "@/types/Item";
// import { Category } from "@/types/Category";
import { categories } from "@/data/categories";
import { items } from "@/data/items";
import { useState, useEffect } from "react";
import { getCurrentMonth, filterListByMouth } from "@/helpers/dateFilter";

const main = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const [category, setCategory] = useState(categories[0]);

  useEffect(() => {
    setFilteredList(filterListByMouth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
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
          income={income}
          expense={expense}
        />
        <InputArea onAdd={handleAddItem} />
        <TableArea list={filteredList} />
      </div>
    </div>
  );
};

export default main;
