import * as S from "./Header.styles";
import { IHeaderProps } from "./Hearder.types";

export default function HeaderUI(props: IHeaderProps) {
  return (
    <S.Header>
      <S.LogoWrapper>
        <S.LogoTitle>HI HEEJE </S.LogoTitle>
      </S.LogoWrapper>
      <S.Mainbar />
      <S.MyNavigation>
        <S.MenuItem id="/" onClick={props.onClickMove}>
          HOME
        </S.MenuItem>
        <S.MenuItem id="/boards" onClick={props.onClickMove}>
          BOARDS
        </S.MenuItem>

        <S.MenuItem id="/market" onClick={props.onClickMove}>
          MARKET
        </S.MenuItem>

        <S.MenuItem id="/mydog" onClick={props.onClickMove}>
          JOKEPAGE
        </S.MenuItem>
      </S.MyNavigation>
      <S.Log_Wapper>
        <S.User_Button id="/mypage" onClick={props.onClickMove}>
          {props.data?.fetchUserLoggedIn.name}
        </S.User_Button>
        <S.Login_Button id="/login" onClick={props.onClickMove}>
          log-in
        </S.Login_Button>
        <S.Sign_Button id="/signup" onClick={props.onClickMove}>
          signup
        </S.Sign_Button>
        <S.Basket_Button
          id="/market/basket"
          onClick={props.onClickMove}
        ></S.Basket_Button>
      </S.Log_Wapper>
    </S.Header>
  );
}
