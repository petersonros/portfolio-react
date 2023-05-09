import { formatCurrentMonth } from "@/helpers/dateFilter";
import ResumeItem from "../ResumeItem";
import styles from "./InfoArea.module.css";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <div className={styles.InfoArea}>
      <div className={styles.infoArea__month}>
        <div className={styles.infoArea__arrow} onClick={handlePrevMonth}>
          ⬅️
        </div>
        <div className={styles.infoArea__title}>
          {formatCurrentMonth(currentMonth)}
        </div>
        <div className={styles.infoArea__arrow} onClick={handleNextMonth}>
          ️➡️
        </div>
      </div>
      <div className={styles.infoArea__resume}>
        <ResumeItem title="Receitas" value={income} />
        <ResumeItem title="Despesas" value={expense} />
        <ResumeItem
          title="Balanço"
          value={income - expense}
          color={income - expense < 0 ? "red" : "green"}
        />
      </div>
    </div>
  );
};

export default InfoArea;
