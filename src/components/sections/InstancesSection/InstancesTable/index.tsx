import { useEffect, useState } from "react";
import styles from "./InstancesTable.module.scss";
import { Inter } from "next/font/google";
import type { Instance } from "@/lib/interfaces/instance";
import { fetchInstances } from "@/lib/instances";
import InstanceRow from "./InstanceRow";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const InstancesTable = () => {
  const [instances, setInstances] = useState<Instance[]>([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const instances = await fetchInstances();
      setInstances(instances);
    } catch (e) {
      console.error(e);
    }
  };

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
          {instances.map((instance, i) => (
            <InstanceRow key={i} instance={instance} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InstancesTable;
