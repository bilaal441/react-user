import styles from "./Overlay.module.css";

const Overlay = (props) => {
  return <div className={styles.overlay} onClick={props.closeModal} />;
};

export default Overlay;
