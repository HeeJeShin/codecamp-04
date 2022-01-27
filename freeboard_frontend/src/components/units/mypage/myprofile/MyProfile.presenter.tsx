import { IMyStoreProps } from "../mystore/MyStore.types";
import * as S from "./MyProfile.styles";
import { IMyProfileProps } from "./MyProfile.types";

const MyProfileUI = (props: IMyProfileProps) => {
  return (
    <>
      <S.Wrapper>
        <S.MyTitle>이메일: {props.data?.fetchUserLoggedIn.email}</S.MyTitle>
        <S.MyTitle>이름: {props.data?.fetchUserLoggedIn.name}</S.MyTitle>
        <S.MyPasswordTitle>비밀번호변경</S.MyPasswordTitle>
        <S.PasswordWrapper>
          <S.MyPassword>현재비밀번호</S.MyPassword>
          <S.PasswordInput type="password" />
          <S.MyPassword>새 비밀번호</S.MyPassword>
          <S.PasswordInput type="password" onChange={props.onChangePassword} />
          <S.MyPassword>새 비밀번호확인</S.MyPassword>
          <S.PasswordInput
            type="password"
            onChange={props.onChangeCheckPassword}
          />
          <S.PasswordBtn onClick={props.onClickResetPassword}>
            비밀번호변경
          </S.PasswordBtn>
        </S.PasswordWrapper>
        <S.NameWrapper>
          <S.MyChangeNameTitle>내 이름 변경</S.MyChangeNameTitle>
          <S.MyNameLabel>변경 할 이름</S.MyNameLabel>
          <S.MyName type="text" onChange={props.onChangeName} />
          <S.NameBtn onClick={props.onClickUpdateName}>이름변경</S.NameBtn>
        </S.NameWrapper>
      </S.Wrapper>
    </>
  );
};
export default MyProfileUI;
