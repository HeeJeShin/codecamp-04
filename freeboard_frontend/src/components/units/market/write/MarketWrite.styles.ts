import styled from "@emotion/styled";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import KakaoMapPage from "../../../../commons/map/KakaoMap";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 1200px;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 100px;
  padding: 80px 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px #b8b8b0;
`;

export const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
`;

export const Wrapper_MyUseditem = styled.div`
  width: 100%;
  padding-top: 40px; ;
`;

export const MyLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  cursor: pointer;
`;

export const MyUseditem = styled.input`
  width: 100%;
  height: 52px;
  box-sizing: border-box;
  padding: 16px;
  border: 1px solid #bdbdbd;
`;

export const Wrapper_MyRemarks = styled.div`
  width: 100%;
  padding-top: 40px; ;
`;

export const MyRemarks = styled.input`
  width: 100%;
  height: 52px;
  box-sizing: border-box;
  padding: 16px;
  border: 1px solid #bdbdbd;
`;

export const Wrapper_MyContents = styled.div`
  width: 100%;
  padding-top: 40px; ;
`;

export const MyContents = styled(ReactQuill)`
  /* width: 100%;
  height: 320px;
  box-sizing: border-box;
  padding: 16px;
  border: 1px solid #bdbdbd; */
`;

export const Wrapper_MyPrice = styled.div`
  width: 100%;
  padding-top: 40px; ;
`;

export const MyPrice = styled.input`
  width: 100%;
  height: 52px;
  box-sizing: border-box;
  padding: 16px;
  border: 1px solid #bdbdbd;
`;

export const Wrapper_MyLocation = styled.div``;

export const Wrapper_MyMap = styled.div``;

// export const MyMap =styled(KakaoMapPage)`

// `;

export const Wrapper_MyAddress = styled.div``;

export const MyAddress = styled.div``;

export const Wrapper_MyTags = styled.div`
  width: 100%;
  padding-top: 40px; ;
`;

export const MyTag = styled.input`
  width: 100%;
  height: 52px;
  box-sizing: border-box;
  padding: 16px;
  border: 1px solid #bdbdbd;
`;

export const Wrapper_MyImage = styled.div``;

export const MyImage = styled.input``;

export const Wrapper_MyOption = styled.div``;

export const MyRadio_Buttoon = styled.input``;

export const MyYoutube = styled.label``;

// export const MyRadio = styled.option``;

export const Wrapper_Mybutton = styled.div``;

export const Mybutton = styled.button`
  width: 50px;
  :hover {
    cursor: pointer;
  }
`;

// <OptionWrapper>
// <Label>메인설정</Label>
// <RadioButton type="radio" id="youtube" name="radio-button" />
// <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
// <RadioButton type="radio" id="image" name="radio-button" />
// <RadioLabel htmlFor="image">사진</RadioLabel>
// </OptionWrapper>
