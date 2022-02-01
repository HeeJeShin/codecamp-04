import { UserAddOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 30%;
  margin-left: 50px;
  /* background-color: gray; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px;
  border-right-color: black;
`;

export const MyTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  padding-bottom: 20px;
`;

export const SidebarHeader = styled.div`
  padding-bottom: 30px;
`;

export const ImgWrapper = styled.div``;

export const MyImg = styled.image`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  padding-bottom: 20px;
`;

export const MyEmo = styled(UserAddOutlined)`
  font-size: 44px;
  padding-bottom: 20px;
`;

export const MyName = styled.div`
  font-size: 15px;
  padding-bottom: 20px;
`;

export const MyPoint = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const SidebarBody = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const MyStore = styled.div`
  padding-bottom: 10px;

  :hover {
    color: tomato;
    cursor: pointer;
  }
`;

export const MyPay = styled.div`
  padding-bottom: 10px;
  :hover {
    color: tomato;
    cursor: pointer;
  }
`;

export const MyProfile = styled.div`
  :hover {
    color: tomato;
    cursor: pointer;
  }
`;
