import { IMyStoreProps } from "../mystore/MyStore.types";
import * as S from "./MyProfile.styles";

const MyProfileUI = (props: IMyStoreProps) => {
  return (
    <>
      <S.Wrapper> 여기는 내프로필입니다.</S.Wrapper>
    </>
  );
};
export default MyProfileUI;
