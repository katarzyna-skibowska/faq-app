import styles from "./BoxBlock.module.css";

const BoxBlock = (props) => {
  return <div className={styles.boxBlock}>{props.children}</div>;
};

export default BoxBlock;
