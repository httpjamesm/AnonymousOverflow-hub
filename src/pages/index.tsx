import InstancesSection from "@/components/sections/InstancesSection";
import HomeWave from "@/components/vectors/HomeWave";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className={styles.waveContainer}>
        <HomeWave />
      </div>
      <div className={styles.wrapper}>
        <main className={styles.container}>
          <div className={styles.brandingContainer}>
            <Image
              src="/codecircles.webp"
              alt="Anonymous Overflow"
              width={200}
              height={200}
            />
          </div>
          <div style={{ margin: "5rem 0" }} />
          <InstancesSection />
        </main>
      </div>
    </>
  );
};

export default Home;
