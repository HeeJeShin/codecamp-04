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
        <h1>Im programmer</h1>
      </div>

      <Log_Wapper>
        <Login_Button onClick={props.onclickMyLogin}>로그인</Login_Button>
        <Sign_Button onClick={props.onclickMySignup}>회원가입</Sign_Button>
      </Log_Wapper>
    </Header>
  );
}
