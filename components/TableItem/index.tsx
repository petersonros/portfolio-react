import styles from "./TableItem.module.css";

const TableItem = () => {
  return (
    <>
      <tr className={styles.tableItem}>
        <td className={styles.tableItem__column}>Date Item</td>
        <td className={styles.tableItem__column}>
          <div className={styles.tableItem__category}>Category Title</div>
        </td>
        <td className={styles.tableItem__column}>Item Title</td>
        <td className={styles.tableItem__column}>
          <div className={styles.tableItem__value}>R$ Item Value</div>
        </td>
      </tr>
    </>
  );
};

export default TableItem;
