import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.closeModal}
      className={`${styles.button}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
