import { CloseOutlined, EditOutlined, UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;

  /* border-bottom: 1px solid #bdbdbd; */
  /* background-color:#b7c5c8; */
  color: gray;
`;

export const QnATitle = styled.h3`
  font-size: 30px;
  padding-bottom: 10px;
`;

export const QnAWrapper = styled.div``;

export const QnAContentsInput = styled.textarea`
  width: 100%;
  text-indent: 10px;
  height: 100px;
`;

export const QnABtn = styled.button`
  margin-left: 1040px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 18px;
  color: black;

  border: none;
  :hover {
    cursor: pointer;
  }
`;

export const QnAListWrapper = styled.div``;

//================

export const ItemWrapper = styled.div`
  padding-top: 20px;
  height: 128px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  width: 5%;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const MyAvatar = styled(UserOutlined)`
  padding-top: 2px;
  font-size: 30px;
  color: #b7c5c8;
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WriterWrapper = styled.div``;

export const Username = styled(Avatar)`
  font-size: 20px;
  padding: 5px;
  font-weight: bold;
`;

export const Contents = styled.div`
  width: 85%;
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

export const BtnWrapper = styled.div``;
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

// write부분.. css

export const Comment_Contents = styled.input`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid white;
`;

export const Comment_Contents_Button = styled.div`
  color: white;
  font-size: 15px;

  width: 150px;
  height: 30px;

  background-color: #b7c5c8;

  :hover {
    background-color: #b8b8b0;
  }
`;

export const Comment_InputWrapper_Contents = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding: 10px;
  /* justify-content: space-between; */
`;
