import TableItem from "../TableItem";
import styles from "./TableArea.module.css";
import { Item } from "@/types/Item";

type Props = {
  list: Item[];
};

const TableArea = ({ list }: Props) => {
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
          {list.map((item, index) => (
            <TableItem key={index} item={item} />
          ))}
        </tbody>
      </div>
    </>
  );
};

export default TableArea;
