import styles from "./Modal.module.css";
import Button from "../UI/Button";

const Modal = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>invalid input</h2>
        </div>
        <div className={styles.content}>
          <p>{props.error}</p>
        </div>
        <div className={styles.btn}>
          <Button closeModal={props.closeModal} type="">
            okay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
