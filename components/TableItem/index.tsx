import styles from "./TableItem.module.css";
import { Item } from "@/types/Item";
import { Category } from "@/types/Category";

type Props = {
  item: Item;
};

const TableItem = ({ item }: Props) => {
  return (
    <>
      <tr className={styles.tableItem}>
        <td className={styles.tableItem__column}>{item.date}</td>
        <td className={styles.tableItem__column}>
          <span className={styles.tableItem__category}>{item.category}</span>
        </td>
        <td className={styles.tableItem__column}>{item.title}</td>
        <td className={styles.tableItem__column}>
          <span className={styles.tableItem__value}>R${item.value}</span>
        </td>
      </tr>
    </>
  );
};

export default TableItem;
