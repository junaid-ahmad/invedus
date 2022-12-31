import Navbar from "../navbar";
import Footer from "../footer";

import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.main_inner}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
