import Container from "../../UI/Container";
import UserInputForm from "./UserInputForm";
import {useState} from "react";
const UserInput = (props) => {
  const [enteredUserName, SetEnteredUserName] = useState("");
  const [enteredAge, SetEnteredAge] = useState("");
  const ValidateHelper = (string, state = true) => {
    props.validate(state);
    props.setError(`Please enter a valid ${string}`);
  };
  const userNameChangeHandler = (e) => SetEnteredUserName(e.target.value);

  const AgeChangeHandler = (e) => SetEnteredAge(e.target.value);

  const addHandlerSubmit = (e) => {
    e.preventDefault();
    if (!enteredUserName ?? !enteredAge) {
      ValidateHelper(`name and age (non-empty values)`);
      return;
    }

    if (!/^[a-zA-Z\s]*$/.test(enteredUserName)) {
      ValidateHelper(`name (input name can be only letters)`);
      return;
    }

    if (+enteredAge <= 0) {
      ValidateHelper("age (>0)");
      return;
    }

    const UserOBject = {
      id: Date.now() + "",
      userName: enteredUserName,
      age: enteredAge,
    };

    props.onAddUser(UserOBject);

    SetEnteredUserName("");
    SetEnteredAge("");
  };

  return (
    <Container>
      <UserInputForm
        formSubmitHandle={addHandlerSubmit}
        userName={enteredUserName}
        age={enteredAge}
        userChangeHandler={userNameChangeHandler}
        ageChangeHandler={AgeChangeHandler}
      />
    </Container>
  );
};

export default UserInput;
