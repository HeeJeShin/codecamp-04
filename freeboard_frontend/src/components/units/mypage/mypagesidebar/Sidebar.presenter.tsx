import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { IUser } from "../../../../commons/types/generated/types";
import * as S from "./Sidebar.styles";
import { ISidebarProps } from "./Sidebar.types";

const MypageSidebarUI = (props: ISidebarProps) => {
  return (
    <>
      <S.Wrapper>
        <S.MyTitle>My Page</S.MyTitle>
        <S.SidebarHeader>
          <S.ImgWrapper>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>
              {props.data?.fetchUserLoggedIn.name}
            </Avatar>
          </S.ImgWrapper>

          <S.MyPoint>
            {props.data?.fetchUserLoggedIn.userPoint.amount}
          </S.MyPoint>
        </S.SidebarHeader>
        <S.SidebarBody>
          <S.MyStore id="/mypage/mystore" onClick={props.onClickMove}>
            내가 산것
          </S.MyStore>
          <S.MyPay id="/mypage/mypayment" onClick={props.onClickMove}>
            내 포인트
          </S.MyPay>
          <S.MyProfile id="/mypage/myprofile" onClick={props.onClickMove}>
            내 프로필
          </S.MyProfile>
        </S.SidebarBody>
      </S.Wrapper>
    </>
  );
};

export default MypageSidebarUI;
