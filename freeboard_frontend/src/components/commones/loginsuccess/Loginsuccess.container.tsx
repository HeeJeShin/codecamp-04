import { useQuery } from "@apollo/client"
import { IQuery } from "../../../commons/types/generated/types"
import LoginSuccessUI from "./Loginsuccess.presenter"
import {FETCH_USER_LOGGED_IN} from "./Loginsuccess.queries"

const LoginSuccess = () => {

    const {data} =
        useQuery<Pick<IQuery,"fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN)

    return(
        <LoginSuccessUI
            data={data}
        
        />
    )
}

export default LoginSuccess





//화살표함수로