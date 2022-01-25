import { split } from "lodash";
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
        {props.data?.fetchUserLoggedIn ? (
          <>
            <S.User_Button id="/mypage" onClick={props.onClickMove}>
              {props.data?.fetchUserLoggedIn.name}
            </S.User_Button>
            <S.User_Button onClick={props.onClickLogout}>
              로그아웃
            </S.User_Button>
          </>
        ) : (
          <>
            <S.Login_Button id="/login" onClick={props.onClickMove}>
              로그인
            </S.Login_Button>
            <S.Sign_Button id="/signup" onClick={props.onClickMove}>
              회원가입
            </S.Sign_Button>
          </>
        )}

        <S.Basket_Button
          id="/market/basket"
          onClick={props.onClickMove}
        ></S.Basket_Button>
      </S.Log_Wapper>
    </S.Header>
  );
}
