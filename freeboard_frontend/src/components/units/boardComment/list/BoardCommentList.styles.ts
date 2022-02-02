import styled from "@emotion/styled";
import { Rate } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { CloseOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
// import { Avatar } from 'antd';

export const ItemWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
  height: 128px;
  border-bottom: 1px solid #bdbdbd;
  /* background-color:#b7c5c8; */
  color: gray;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled(UserOutlined)`
  padding-top: 2px;
  font-size: 50px;
  color: #b7c5c8;
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const Contents = styled.div`
  font-size: 16px;
  color: Gray 2;
  padding-top: 2px;
  padding-left: 16px;
  padding-bottom: 20px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UpdateIcon = styled(EditOutlined)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bdbdbd;
`;

export const DeleteIcon = styled(CloseOutlined)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bdbdbd;
`;

export const DateString = styled.div`
  color: lightgray;
  box-sizing: border-box;
  padding-top: 2px;
  padding-left: 60px;
`;

export const Star = styled(Rate)`
  padding-left: 20px;
  color: #edceba;
`;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
