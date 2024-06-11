import styles from "./InstancesTable.module.scss";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const InstancesTable = () => {
  return (
    <div className={[styles.tableContainer, inter.className].join(" ")}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Operators</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Instance 1</td>
            <td>United States</td>
            <td>Admin 1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InstancesTable;
