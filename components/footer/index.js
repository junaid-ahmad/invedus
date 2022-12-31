import Image from "next/image";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Assignment submitted by -
      <span style={{ fontWeight: "bold", color: "#0074de", paddingLeft: 8 }}>
        {" "}
        Juned Ahmad Ansari
      </span>
    </footer>
  );
};

export default Footer;
