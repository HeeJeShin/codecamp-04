import styled from "@emotion/styled";

export const Header = styled.div`
  height: 152px;
  /* background-color:#edceba; */
  display: flex;
  
  padding-top: 13px;
  
  font-size: 20px;
 
`;


export const Log_Wapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  
`;

export const Login_Button = styled.button`
  width: 92px;
  height: 44px;
  margin-right:10px;
  /* background-color: #edceba; */
  background-color: white;
  border-radius: 15px;
  border: none;
  color: gray;
  :hover {
       /* background-color: #b7c5c8; */
       cursor: pointer;
  }    
`;

export const Sign_Button = styled.button`
  width: 92px;
  height: 44px;
  margin-left:10px;
  color: gray;
  text-decoration:underline;
  background-color: white;
  /* background-color: #edceba; */
  border-radius: 15px;
  border: none;
  :hover {
       /* background-color: #b7c5c8; */
       cursor: pointer;
       
  }    
`;
