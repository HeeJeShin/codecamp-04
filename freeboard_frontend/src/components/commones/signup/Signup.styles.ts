import styled from "@emotion/styled"


export const Wrapper =styled.div`
    /* display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 700px;
    padding: 0 30px;
    margin: 100px; */

  /* width: 1200px; */
  width: 700px;
  border: 1px solid black;
  margin-left: 350px;
  padding: 80px 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
 
`;

export const Title =styled.h1`
    text-align: center;
    
    font-size: 50px;
    /* display: block; */
    padding-bottom: 50px;
    
    
`;
export const InputWrapper = styled.div`
    display: block;
    width: 100%;
    padding-bottom: 15px;
    font-size: 15px;
`;

export const InputWrapper_Email =styled.div`
    display: block;
    width: 100%;
    padding-bottom: 15px;
    font-size: 15px;
    
`;

export const MyEmail =styled.input`
    width: calc(100% - 110px);
    padding-left: 9px;
    font-size: 15px;    
    height: 40px;
    border-top : none;
    border-left : none;
    border-right: none;
`;

export const InputWrapper_Name =styled.div`
    display: block;
    width: 100%;
    padding-bottom: 15px;
    font-size: 15px;
`;

export const MyLabel = styled.label`
    display: inline-block;
    width: 100px;
    padding-right: 10px;
`;

export const MyName =styled.input`
    width: calc(100% - 110px);
    padding-left: 9px;
    font-size: 15px;    
    height: 40px;
    border-top : none;
    border-left : none;
    border-right: none;
`;

export const InputWrapper_Password =styled.div`
    display: block;
    width: 100%;
    padding-bottom: 15px;
    font-size: 15px;
`;



export const MyPassword =styled.input`
    width: calc(100% - 110px);
    padding-left: 9px;
    font-size: 15px;    
    height: 40px;
    border-top : none;
    border-left : none;
    border-right: none;
`;

export const InputWrapper_Password_Check =styled.div`

`;

export const MyPassword_Check = styled.input`
    width: calc(100% - 110px);
    padding-left: 9px;
    font-size: 15px;    
    height: 40px;
    border-top : none;
    border-left : none;
    border-right: none;
`;

export const SubmitButton = styled.button`
    width: 100%;
    height: 40px;
    margin-top: 30px;
    //margin-left: 100px;
    border: none;
    :hover {
    cursor: pointer;
     }
    
`;


export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;