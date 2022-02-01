import styled from "@emotion/styled";
import Slider from "@ant-design/react-slick";
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 800px;

  margin: 0 auto;
  height: 700px;
`;

export const Login_Wrapper = styled.div`
  width: 50%;
  padding: 0 30px;
`;

export const H_Wrapper = styled.div`
  text-align: center;
  font-weight: bold;
`;

export const Input_Wrapper = styled.div`
  display: block;
  width: 100%;
  padding-bottom: 15px;
  font-size: 15px;
`;
export const Label = styled.label`
  display: inline-block;
  width: 70px;
  padding-right: 10px;
`;
export const MyEmail_input = styled.input`
  width: calc(100% - 70px);
  padding-left: 9px;
  font-size: 20px;
`;

export const MyPassword_input = styled.input`
  width: calc(100% - 70px);
  padding-left: 9px;
  font-size: 20px;
`;

export const Submit_Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
`;

export const Submit = styled.button`
  border: none;
  :hover {
    cursor: pointer;
  }
`;
// export const Slidera = styled(Slider)

export const MySlider = styled(Slider)`
  width: 50%;
  padding: 0 30px;
`;

export const Slider_Image = styled.div`
  width: 400px;
  height: 300px;
`;

export const MyImage = styled.img``;
