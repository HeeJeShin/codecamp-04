import { CloseOutlined, EditOutlined, UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";


export const Wrapper = styled.div`
  
`;

export const ItemWrapper = styled.div`
  width: 1200px;
  margin: 0px 100px;
  padding-top: 20px;
  height: 128px;
  /* border-bottom: 1px solid #bdbdbd; */
  /* background-color:#b7c5c8; */
  color: gray;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled(UserOutlined )`
  padding-top: 2px;
  font-size: 20px;
  color:  #b7c5c8;
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

export const Username = styled.div`
  font-size: 10px;
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

export const UpdateIcon = styled(EditOutlined )`
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bdbdbd;
`;

export const DeleteIcon = styled(CloseOutlined )`
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
  text-align: center;
  /* line-height: 52px; */
  background-color: #b7c5c8; 
  
    :hover {
      background-color : #b8b8b0;
   }
`;

export const Comment_InputWrapper_Contents = styled.div`
  width: 100%;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  margin-top: 10px; // 이거바꿔야됨.
`;