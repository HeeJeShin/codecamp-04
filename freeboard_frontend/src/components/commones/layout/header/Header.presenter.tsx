import {
  Header,
  Log_Wapper,
  Login_Button,
  Sign_Button,
  // Header_Image
} from "./Header.styles";

export default function HeaderUI(props) {
  return (
    <Header>
      <div>
        <h1>hi heeje </h1>
      </div>

      <Log_Wapper>
        <Login_Button onClick={props.onclickMyLogin}>log-in</Login_Button>
        <Sign_Button onClick={props.onclickMySignup}>signup</Sign_Button>
      </Log_Wapper>
    </Header>
  );
}
