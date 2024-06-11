import type { Instance } from "@/lib/interfaces/instance";
import styles from "./InstanceRow.module.scss";

const InstanceRow = ({ instance }: { instance: Instance }) => {
  const domain = new URL(instance.url).hostname;

  return (
    <tr>
      <td data-label="URL">
        <a href={instance.url} target="_blank" rel="noopener noreferrer">
          {domain}
        </a>
      </td>
      <td data-label="Regions">{instance.regions.join(", ")}</td>
      <td data-label="Operators">
        <div className={styles.operators}>
          {instance.operators.map((operator) => (
            <a
              href={operator}
              key={operator}
              target="_blank"
              rel="noopener noreferrer"
            >
              {new URL(operator).hostname}
            </a>
          ))}
        </div>
      </td>
    </tr>
  );
};

export default InstanceRow;
