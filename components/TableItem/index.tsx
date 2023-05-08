import styles from "./TableItem.module.css";
import { Item } from "@/types/Item";
import { formatDate } from "@/helpers/dateFilter";
import { categories } from "@/data/categories";

type Props = {
  item: Item;
};

const TableItem = ({ item }: Props) => {
  const categoryColor = categories[item.category].color;
  const valueColor = categories[item.category].expense ? "red" : "green";
  return (
    <tr className={styles.tableItem}>
      <td className={`${styles.tableItem__column} ${styles.tableItem__date}`}>
        {formatDate(item.date)}
      </td>
      <td className={styles.tableItem__column}>
        <span
          className={styles.tableItem__category}
          style={{ backgroundColor: categoryColor }}
        >
          {item.category}
        </span>
      </td>
      <td className={styles.tableItem__column}>{item.title}</td>
      <td className={styles.tableItem__column}>
        <span className={styles.tableItem__value} style={{ color: valueColor }}>
          R${item.value}
        </span>
      </td>
    </tr>
  );
};

export default TableItem;
