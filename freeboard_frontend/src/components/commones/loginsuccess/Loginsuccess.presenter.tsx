import BestItem from "../../units/market/Bestitem/BestItem.container";
import * as S from "./Loginsuccess.styles";
import { ILoginsuccessProps } from "./Loginsuccess.types";

const LoginSuccessUI = (props: ILoginsuccessProps) => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>당신은 로그인에 성공했습니다</S.TitleWrapper>
      <S.LogName>{props.data?.fetchUserLoggedIn.name}님 환영합니다! </S.LogName>
      <S.MarketBtn onClick={props.onClickWriter}>
        market글쓰기로 이동
      </S.MarketBtn>
      <BestItem />
    </S.Wrapper>
  );
};
export default LoginSuccessUI;
