import { CommentOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div``;

export const Star = styled(Rate)` 
 box-sizing: border-box;
 padding-left: 26px;
 color: #edceba;
`

export const MyIcon = styled(CommentOutlined )`
  box-sizing: border-box;
  margin-right: 14px;
  font-size: 18px;
  color: #FFD600;
`;

export const Comment_Header = styled.div`
  box-sizing: border-box;
  padding-top: 40px;
  font-style: normal;
  font-size: 18px;
`;

export const Comment_InputWrapper_Contents = styled.div`
  width: 100%;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  margin-top: 10px; // 이거바꿔야됨.
`;

export const Comment_Contents = styled.input`
  width: 100%;
  height: 108px;
  box-sizing: border-box;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid white;
`;

export const Comment_Contents_Footer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Comment_Contents_Typing_Count = styled.div`
  width: 52px;
  height: 24px;
  box-sizing: border-box;
  padding-bottom: 14px;
  padding-left: 20px;
  color: #bdbdbd;
  font-size: 16px;
`;

export const Comment_Contents_Button = styled.div`
  
  color: white;
  font-size: 16px;
  width: 91px;
  height: 52px;
  text-align: center;
  line-height: 52px;
  background-color: #b7c5c8; 
  
    :hover {
      background-color : #b8b8b0;
   }
`;
