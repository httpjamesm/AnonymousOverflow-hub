import { Poppins } from "next/font/google";
import InstancesTable from "./InstancesTable";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const InstancesSection = () => {
  return (
    <>
      <h1 className={poppins.className}>Instances</h1>
      <InstancesTable />
    </>
  );
};

export default InstancesSection;
