import *as S from './Signup.styles'


export default function SignupUI(){

    return(
        <S.Wrapper>
            <S.Title>SignUp</S.Title>
            <S.InputWrapper>
            <S.InputWrapper_Email>
                <S.MyLabel>email</S.MyLabel>
                <S.MyEmail 
                    type="text"
                    placeholder="Please enter a email"
                />
            </S.InputWrapper_Email>

            <S.InputWrapper_Name>
                <S.MyLabel>name</S.MyLabel>
                <S.MyName 
                    type="text"
                    placeholder="Please enter a name"
                />
            </S.InputWrapper_Name>

            <S.InpuetWrapper_Password>
                <S.MyLabel>password</S.MyLabel>
                <S.MyPassword 
                    type="password"
                    placeholder="Please enter a password"
                />
            </S.InpuetWrapper_Password>
            
            <S.InpuetWrapper_Password_Check>
                <S.MyLabel>password check</S.MyLabel>
                <S.MyPassword_Check 
                    type="password"
                    placeholder="Please enter a password"
                />
            </S.InpuetWrapper_Password_Check>
            </S.InputWrapper>
            <S.SubmitButton>
                SIGN UP
            </S.SubmitButton>
        </S.Wrapper>
    )
}