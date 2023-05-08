import TableItem from "../TableItem";
import styles from "./TableArea.module.css";

const TableArea = () => {
  return (
    <>
      <div className={styles.tableArea}>
        <thead>
          <tr>
            <th className={styles.tableColumn}>Data</th>
            <th className={styles.tableColumn}>Categoria</th>
            <th className={styles.tableColumn}>Título</th>
            <th className={styles.tableColumn}>Valor</th>
          </tr>
        </thead>
        <tbody>
          <TableItem />
        </tbody>
      </div>
    </>
  );
};

export default TableArea;
