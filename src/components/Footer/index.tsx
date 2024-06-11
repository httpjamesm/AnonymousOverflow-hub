import styles from "./Footer.module.scss";
import { FaGithub } from "react-icons/fa";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className={[styles.footer, inter.className].join(" ")}>
      <div className={styles.icons}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/httpjamesm/AnonymousOverflow-hub"
        >
          <FaGithub size={24} />
        </a>
      </div>
      <p className={styles.love}>
        Made with 💚 by{" "}
        <a href="https://httpjames.space" target="_blank">
          http.james
        </a>
      </p>
    </footer>
  );
};

export default Footer;
