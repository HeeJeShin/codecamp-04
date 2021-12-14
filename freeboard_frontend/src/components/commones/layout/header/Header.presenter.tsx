import {
  Header,
  Log_Wapper,
  User_Button,
  Login_Button,
  Sign_Button,
  Basket_Button
  // Header_Image
} from "./Header.styles";
import { IHeaderProps } from "./Hearder.types";

export default function HeaderUI(props: IHeaderProps) {
  

  return (
    <Header>
      <div>
        <h1>hi heeje </h1>
      </div>

      <Log_Wapper>
        <User_Button id="/mypage">
           Hi {props.data?.fetchUserLoggedIn.name}
        </User_Button>
        <Login_Button id="/login" onClick={props.onClickMove}>log-in</Login_Button>
        <Sign_Button id="/signup" onClick={props.onClickMove}>signup</Sign_Button>
        <Basket_Button id="/market/basket" onClick={props.onClickMove}>mybasket</Basket_Button>
      </Log_Wapper>
    </Header>
  );
}
