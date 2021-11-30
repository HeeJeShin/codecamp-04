
import * as S from "./Loginform.styles";


export default function LoginFormUI(props) {
  return (
    <S.Wrapper>
      <S.H_Wrapper>
        <h1>log-in</h1>
      </S.H_Wrapper>
      <S.Input_Wrapper>
        이메일:
        <S.MyEmail_input type="text" onChange={props.onChangeMyEmail} />
        비밀번호:
        <S.MyPassword_input type="password" onChange={props.onChangeMyPassword} />
      </S.Input_Wrapper>
      
      <S.Submit_Wrapper>
        <S.Submit onClick={props.onClickLogin}>로그인</S.Submit>
        <S.Submit onClick={props.onClickSignup}>회원가입</S.Submit>
      </S.Submit_Wrapper>

    </S.Wrapper>
  );
}
