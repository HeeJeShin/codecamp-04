import styled from "@emotion/styled";
import { IEmotionProps } from "./BoardWrite.types";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  /* height: 1847px; */
  border: 1px solid black;
  /* margin: 100px; */
  padding: 80px 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px #b8b8b0;
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
`;

export const Writer = styled.input`
  width: 486px;
  height: 52px;
  box-sizing: border-box;
  padding: 16px;
  border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
  width: 486px;
  height: 52px;
  box-sizing: border-box;
  padding: 16px;
  border: 1px solid #bdbdbd;
`;

export const Label = styled.div`
  width: 100%;
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const InputWrapper_Writer = styled.div``;

export const InputWrapper_Password = styled.div``;

export const InputWrapper_Title = styled.div`
  width: 100%;
`;

export const InputWrapper_Contents = styled.div`
  width: 100%;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;

export const Subject = styled.input`
  width: 100%;
  height: 52px;
  box-sizing: border-box;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  box-sizing: border-box;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
`;

export const InputWrapper_Zipcode = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  box-sizing: border-box;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  background-color: #b7c5c8;
  cursor: pointer;
  color: white;
  border: none;
`;

export const InputWrapper_Youtobe = styled.div`
  width: 100%;
  padding-top: 40px;
`;

export const Address = styled.input`
  width: 996px;
  height: 52px;
  margin-top: 16px;
  box-sizing: border-box;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Youtube = styled.input`
  width: 996px;
  height: 52px;
  box-sizing: border-box;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: center;
`;

export const OptionWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
  
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const CancelButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: #bdbdbd;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  background-color: ${(props: IEmotionProps) =>
    props.isActive === true ? "#b7c5c8" : "#edeae3"};

  :hover {
    cursor: ${(props: IEmotionProps) =>
      props.isActive === true ? "pointer" : "default"};
  }
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;
