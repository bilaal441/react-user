import Container from "../../UI/Container";
import UserList from "./userList";

const User = (props) => {
  if (!props.userItems.length) return null;
  return (
    <Container>
      {props.userItems.map((userItem) => (
        <UserList
          key={userItem.id}
          text={`${userItem.userName} (${userItem.age} years old)`}
        />
      ))}
    </Container>
  );
};

export default User;
