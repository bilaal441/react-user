import styles from "./UserInput.module.css";

import Button from "../../UI/Button";

const UserInputForm = (props) => {
  return (
    <form onSubmit={props.formSubmitHandle}>
      <div className={`${styles["form-control"]}`}>
        <label>Username</label>
        <input value={props.userName} onChange={props.userChangeHandler} type="text" />
      </div>
      <div className={`${styles["form-control"]}`}>
        <label>Age (Years)</label>
        <input value={props.age} onChange={props.ageChangeHandler} type="number" />
      </div>
      <Button type={"submit"}>Add user</Button>
    </form>
  );
};

export default UserInputForm;
