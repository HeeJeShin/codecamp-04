import { 
    Header,
    Log_Wapper,
    Login_Button,
    Sign_Button,
    // Header_Image
 } from "./Header.styles"


export default function HeaderUI(){
   
    
    return(
        <Header>
            <div>
             <h1>Im programmer</h1>
            </div>
            
            <Log_Wapper>
                <Login_Button>
                    로그인
                </Login_Button>
                <Sign_Button>
                    회원가입
                </Sign_Button>
            </Log_Wapper>    
        </Header>
    )
}