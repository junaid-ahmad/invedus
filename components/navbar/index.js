import Image from "next/image";

import logo from "../../public/invedus_christmas_logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__inner}>
        {/* Left */}
        <div className={styles.left}>
          <Image src={logo} alt="Logo" height={48} priority={true} />
        </div>

        {/* Right */}
      </div>
    </nav>
  );
};

export default Navbar;
