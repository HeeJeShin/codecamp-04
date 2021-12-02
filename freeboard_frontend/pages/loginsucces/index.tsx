import { withAuth } from "../../src/commons/hocs/withAuth";
import LoginSuccess from "../../src/components/commones/loginsuccess/Loginsuccess.container"

function LoginSuccessPage() {
    
    return(
        <LoginSuccess />
          
    )
}

export default withAuth(LoginSuccessPage);