import Link from "next/link";

import styles from "./Button.module.css";

const Button = ({ href, onClick, children, ...rest }) => {
  if (!href) {
    return (
      <button
        onClick={onClick}
        className={[styles.button, { position: "absolute" }]}
        {...rest}
      >
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  );
};

export default Button;
