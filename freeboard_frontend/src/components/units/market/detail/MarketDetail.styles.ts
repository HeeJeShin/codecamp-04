import styled from "@emotion/styled";
import { Button } from "antd";
import { LikeOutlined, UserAddOutlined } from "@ant-design/icons";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: 0 auto;
`;

export const CardWrapper = styled.div`
  border: none;
  background-color: #edeae3;
  padding: 100px;
  display: flex;
  flex-direction: column;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
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
  padding-bottom: 50px;
`;

export const Title = styled.h1`
  padding-top: 80px;
`;

export const Linebar = styled.div`
  border: solid 1px;
`;

export const Remark = styled.div`
  padding-bottom: 20px;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;

  padding-top: 50px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
`;

export const Contents = styled.div`
  font-size: 17px;
`;

export const MapWrapper = styled.div`
  padding-bottom: 20px;
  font-size: 17px;
`;
export const PriceWrapper = styled.div`
  border-top: solid 2px;

  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.div`
  color: blue;
  font-size: 38px;
`;

export const Img = styled.img`
  display: flex;

  width: 400px;
  height: 400px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 87px;
`;

export const MyBtn = styled(Button)`
  margin-right: 10px;
  height: 70px;
`;

// export const Button = styled.button`
//   width: 179px;
//   height: 45px;
//   background-color: white;
//   border: 1px solid #b7c5c8;
//   margin: 0px 12px;
//   cursor: pointer;
//   color: gray;

//   :hover {
//     background-color: #b7c5c8;
//     border-color: #b7c5c8;
//   }
// `;
