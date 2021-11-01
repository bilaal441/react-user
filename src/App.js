import UserInput from "./Components/AddUser/UserInput/UserInput";
import User from "./Components/AddUser/UserData/user";
import Portal from "./Components/Modal/Portal";
import {useState} from "react";

function App() {
  const [UserData, setUserData] = useState([]);
  const [IsOpen, setIsOpen] = useState(false);
  const [errorMessage, SetErrorMessage] = useState("");

  const AddUserHandler = (enteredUser) => {
    setUserData((prevUser) => {
      console.log(enteredUser);
      const updatedUser = [...prevUser];
      updatedUser.unshift(enteredUser);
      return updatedUser;
    });
  };

  return (
    <>
      <UserInput
        onAddUser={AddUserHandler}
        validate={setIsOpen}
        setError={SetErrorMessage}
      />
      <User userItems={UserData} />
      <Portal open={IsOpen} setState={setIsOpen} error={errorMessage} />
    </>
  );
}

export default App;
