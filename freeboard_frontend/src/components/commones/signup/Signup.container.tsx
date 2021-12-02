import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import SignupUI from "./Signup.presenter";
import { CREATE_USER } from "./Signup.queries";

export default function Signup(){
    //정규식 넣어야되고 /^\w+@\w+.\w+$/.test("123@123.com")
    //비밀번호 셋마이페스워드투 넣고 검증
    
    const [myEmail, setMyEmail] = useState("");
    const [myName, setMyName] = useState("");
    const [myPassword, setMyPassword] = useState("");

    const [myEmailError, setMyEmailError] = useState("");
    const [myNameError, setMyNameError] = useState("");
    const [myPasswordError, setMyPasswordError] = useState("");

    const [createUser] = useMutation(CREATE_USER)

    // function onChangeMyEmail(event: ChangeEvent<HTMLInputElement>){
    //     setMyEmail(event.target.value)
    //     if (event.target.value !== ""){
    //         setMyEmailError("");
    //     }

    //     if
    // } 이거 약간 글수정하는거 같은데 확인하고 지워요.. 
    
    async function onClickSubmit(){
        if (myEmail){
            setMyEmailError("이메일을 입력해주세요")
        }
        if (myPassword === ""){
            setMyPasswordError("비밀번호를 입력해주세요")
        }
        if (myName === ""){
            setMyNameError("이름을 입력해주세요")
        }
        const result = await createUser({
            variables: {
                CreateUserInput:{
                    email: myEmail,
                    password: myPassword,
                    name: myName
                }

            }
        }) 
        alert("콜")
    }
    

    return(
        <SignupUI 
            myEmailError={myEmailError}
            myNameError={myNameError}
            myPasswordError={myPasswordError}   
            onClickSubmit={onClickSubmit}     
        />
    )
}