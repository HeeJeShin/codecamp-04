import MyformUI from "./Myform.presenter";

import {FormValues} from "./Myform.types"

export default function Myform(){
    
    
      function onClickLogin(data: FormValues) {
        console.log(data);
        // loginUser API 요청하기!!!
      }
    return(
        <MyformUI
             
             onClickLogin={onClickLogin}
             
        />
        
    )
}