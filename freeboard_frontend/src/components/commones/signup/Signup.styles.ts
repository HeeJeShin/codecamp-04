import styled from "@emotion/styled"


export const Wrapper =styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 700px;
    padding: 0 30px;
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
    width: calc(100% - 170px);
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
    width: calc(100% - 170px);
    padding-left: 9px;
    font-size: 15px;    
    height: 40px;
    border-top : none;
    border-left : none;
    border-right: none;
`;

export const InpuetWrapper_Password =styled.div`
    display: block;
    width: 100%;
    padding-bottom: 15px;
    font-size: 15px;
`;

export const MyLaver =styled.label`
    display: inline-block;
    width: 120px;
     padding-right: 10px;
`;

export const MyPassword =styled.input`
    width: calc(100% - 170px);
    padding-left: 9px;
    font-size: 15px;    
    height: 40px;
    border-top : none;
    border-left : none;
    border-right: none;
`;

export const InpuetWrapper_Password_Check =styled.div`

`;

export const MyPassword_Check = styled.input`
    width: calc(100% - 170px);
    padding-left: 9px;
    font-size: 15px;    
    height: 40px;
    border-top : none;
    border-left : none;
    border-right: none;
`;

export const SubmitButton = styled.button`
    width: 100px;
    height: 20px;
    margin-top: 30px;
    margin-left: 100px;
    border: none;
    :hover {
    cursor: pointer;
     }
    
`;


