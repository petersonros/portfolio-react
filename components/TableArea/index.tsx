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
            <th className={styles.tableColumn} style={{ width: "100px" }}>
              Data
            </th>
            <th className={styles.tableColumn} style={{ width: "130px" }}>
              Categoria
            </th>
            <th className={styles.tableColumn}>Título</th>
            <th className={styles.tableColumn} style={{ width: "150px" }}>
              Valor
            </th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.length > 0 &&
            list.map((item, index) => <TableItem key={index} item={item} />)}
        </tbody>
      </div>
    </>
  );
};

export default TableArea;
