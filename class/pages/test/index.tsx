import {gql, useMutation} from "@apollo/client"
import { IMutation, IMutationLoginUserArgs } from "../../src/commons/types/generated/types";

const LOGIN_USER = gql`
    mutation loginUser($email: String! , $password: String!){
        loginUser(email: $email, password: $password){
            accessToken
        }
    }
`;

export default function LoginPage(){
    const [loginUser] = useMutation<
        Pick<IMutation, "loginUser">,
        IMutationLoginUserArgs
        >(LOGIN_USER)

    function onClickLogin(){
        LOGIN_USER({

        })
    }

    return(
        <>
            이메일: <input type="text" />
            비밀번호: <input type="password" />
            <button onClick={onClickLogin}>로그인</button>
        </>
    )
}