import styles from "./Error.module.css";

const TextError = (props) => {
  return <p className={styles.error}>{props.children} </p>;
};

export default TextError;
