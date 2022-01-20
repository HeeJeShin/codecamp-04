import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Header = styled.div`
  height: 170px;
  /* background-color:#edceba; */
  display: flex;
  flex-direction:column;
  padding-top: 13px;
  
  font-size: 20px;
  font:  src: url('/fonts/NanumGothicCoding-Regular.ttf');
 
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
`;

export const LogoTitle = styled.h1``;

export const Mainbar = styled.div`
  border: solid 1px gray;
`;

export const MyNavigation = styled.div`
  height: 64px;
  /* background-color: #edeae3; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

export const MenuItem = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  cursor: pointer;

  :hover {
    color: #f3bac0;
  }
`;

export const Log_Wapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const User_Button = styled(UserOutlined)`
  width: 152px;
  height: 50px;
  margin-right: 5px;

  border: none;
  color: orange;
  :hover {
    /* background-color: #b7c5c8; */
    cursor: pointer;
  }
`;

export const Login_Button = styled.button`
  width: 92px;
  height: 44px;
  margin-right: 5px;
  background-color: #edceba;

  border: none;
  color: gray;
  :hover {
    /* background-color: #b7c5c8; */
    cursor: pointer;
  }
`;

export const Sign_Button = styled.button`
  width: 92px;
  height: 44px;
  margin-left: 5px;
  color: gray;
  text-decoration: underline;

  background-color: #edceba;
  /* background-color: #edceba; */

  border: none;
  :hover {
    /* background-color: #b7c5c8; */
    cursor: pointer;
  }
`;

export const Basket_Button = styled(ShoppingCartOutlined)`
  width: 92px;
  height: 44px;
  margin-left: 5px;
  color: gray;

  background-color: #edceba;

  border: none;
  :hover {
    /* background-color: #b7c5c8; */
    cursor: pointer;
  }
`;
