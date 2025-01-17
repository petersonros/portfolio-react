import styles from "./TableArea.module.css";
import TableItem from "../TableItem";
import { Item } from "@/types/Item";

type Props = {
  list: Item[];
};

const TableArea = ({ list }: Props) => {
  return (
    <table className={styles.tableArea}>
      <thead>
        <tr>
          <th className={styles.tableColumn} style={{ width: "100px" }}>
            Data
          </th>
          <th className={styles.tableColumn} style={{ width: "130px" }}>
            Categoria
          </th>
          <th className={styles.tableColumn} style={{ width: "auto" }}>
            Título
          </th>
          <th className={styles.tableColumn} style={{ width: "100px" }}>
            Valor
          </th>
          <th className={styles.tableColumn} style={{ width: "20px" }}>
            &nbsp;
          </th>
        </tr>
      </thead>
      <tbody>
        {list &&
          list.length > 0 &&
          list.map((item, index) => <TableItem key={index} item={item} />)}
      </tbody>
    </table>
  );
};

export default TableArea;
