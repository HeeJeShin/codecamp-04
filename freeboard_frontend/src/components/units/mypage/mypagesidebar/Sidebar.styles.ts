import { UserAddOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MyTitle = styled.div`
  font-size: 20px;
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
  padding-bottom: 20px;
`;

export const SidebarBody = styled.div``;

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
