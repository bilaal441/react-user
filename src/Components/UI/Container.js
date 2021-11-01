import styles from "./Container.module.css";

const Container = (props) => {
  return <section className={styles.container}>{props.children}</section>;
};

export default Container;
