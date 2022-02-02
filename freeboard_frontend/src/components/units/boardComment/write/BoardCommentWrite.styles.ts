import styled from "@emotion/styled";
import { CommentOutlined } from "@ant-design/icons";
import { Rate } from "antd";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 1200px;
  /* height: 1847px; */

  margin: 0 auto;
  padding: 1px 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
`;

export const FooterWarpper = styled.div`
  border-top: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
  align-items: left;
  box-sizing: border-box;
  width: 1200px;
  margin: 100px;
`;

export const Star = styled(Rate)`
  box-sizing: border-box;
  padding-left: 26px;
  color: #edceba;
`;

export const MyIcon = styled(CommentOutlined)`
  box-sizing: border-box;
  margin-right: 14px;
  font-size: 18px;
  color: #ffd600;
`;

export const Comment_Header = styled.div`
  box-sizing: border-box;
  padding-top: 40px;
  font-style: normal;
  font-size: 18px;
`;

export const Comment_WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 40px;
`;

export const Comment_InputWrapper_Writer = styled.div``;

export const Comment_Writer = styled.input`
  width: 180px;
  height: 52px;
  box-sizing: border-box;
  padding-left: 16px;

  border: 1px solid #bdbdbd;
`;

export const Comment_InputWrapper_Password = styled.div`
  box-sizing: border-box;
  padding-left: 16px;
`;

export const Comment_Password = styled.input`
  width: 180px;
  height: 52px;
  box-sizing: border-box;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

// export const Rate = styled.div`

// `

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
    background-color: #b8b8b0;
  }
`;
