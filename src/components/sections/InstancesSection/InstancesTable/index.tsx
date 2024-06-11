import { useEffect, useState } from "react";
import styles from "./InstancesTable.module.scss";
import { Inter } from "next/font/google";
import { Instance, type InstanceList } from "@/lib/interfaces/instance";
import { fetchInstances } from "@/lib/instances";
import InstanceRow from "./InstanceRow";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const InstancesTable = () => {
  const [instanceList, setInstanceList] = useState<InstanceList | undefined>(
    undefined
  );
  const [selectedProtocol, setSelectedProtocol] = useState<string>("");
  const [instances, setInstances] = useState<Instance[]>([]);

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (!instanceList) return;
    setInstances(instanceList[selectedProtocol]);
  }, [selectedProtocol]);

  const init = async () => {
    try {
      const instances = await fetchInstances();
      setInstanceList(instances);
      const protocols = Object.keys(instances);
      if (!protocols.length) return;
      setSelectedProtocol(protocols[0]);
    } catch (e) {
      console.error(e);
    }
  };

  if (!instanceList) return null;

  return (
    <div className={[styles.tableContainer, inter.className].join(" ")}>
      <label>
        Protocol{" "}
        <select
          className={styles.select}
          onChange={(e) => setSelectedProtocol(e.target.value)}
        >
          {Object.keys(instanceList).map((protocol, i) => (
            <option key={i} value={protocol}>
              {protocol}
            </option>
          ))}
        </select>
      </label>
      <br />
      <br />
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
