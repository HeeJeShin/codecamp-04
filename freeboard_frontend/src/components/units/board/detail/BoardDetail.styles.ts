import styled from "@emotion/styled";
import { LikeOutlined } from "@ant-design/icons";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
`;

export const CardWrapper = styled.div`
  border: solid 1px;
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px #b8b8b0;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f3bac0;
  padding-bottom: 20px;
  color: gray;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div``;

export const CreatedAt = styled.div``;

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
`;

export const Title = styled.h1`
  padding-top: 80px;
`;

export const Contents = styled.div`
  box-sizing: border-box;
  padding-left: 20px;
  padding-top: 40px;
  padding-bottom: 120px;
`;
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Img = styled.img`
  box-sizing: border-box;
  display: flex;

  width: 300px;
`;

export const Contents_Icon = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
  box-sizing: border-box;
  // padding-bottom: 80px; // 수정해야되고
  padding-top: 162px; //이미지간격만큼만
  margin: 0 auto; //이거하니까 가운데정렬
`;

export const Wapper_Like = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffd600;
`;

export const Like_Icon = styled(LikeOutlined)`
  color: #ffd600;
  font-size: 50px;
`;

export const Wapper_Dislike = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #bdbdbd;
`;

export const Dislike_Icon = styled(LikeOutlined)`
  color: #bdbdbd;
  font-size: 50px;
  transform: rotate(180deg);
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 87px;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid #b7c5c8;
  margin: 0px 12px;
  cursor: pointer;
  color: gray;

  :hover {
    background-color: #b7c5c8;
    border-color: #b7c5c8;
  }
`;

export const Youtube = styled(ReactPlayer)`
  margin: auto;
`;
export const IconWrapper = styled.div`
  text-align: center;
`;

export const LinkIcon = styled.img``;

export const LocationIcon = styled.img``;

//------------------------------------
