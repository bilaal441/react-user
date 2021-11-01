import styles from "./UserList.module.css";

const UserList = (props) => {
  return <div className={styles["user-Container"]}>{props.text}</div>;
};

export default UserList;
