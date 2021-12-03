import *as S from './Signup.styles'


export default function SignupUI(props: ISignupUIProps){

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
                <S.Error>{props.myEmailError}</S.Error>
            </S.InputWrapper_Email>

            <S.InputWrapper_Name>
                <S.MyLabel>name</S.MyLabel>
                <S.MyName 
                    type="text"
                    placeholder="Please enter a name"
                />
                <S.Error>{props.myNameError}</S.Error>
            </S.InputWrapper_Name>

            <S.InputWrapper_Password>
                <S.MyLabel>password</S.MyLabel>
                <S.MyPassword 
                    type="password"
                    placeholder="Please enter a password"
                />
                <S.Error>{props.myPasswordError}</S.Error>
            </S.InputWrapper_Password>
            
            <S.InputWrapper_Password_Check>
                <S.MyLabel>password check</S.MyLabel>
                <S.MyPassword_Check 
                    type="password"
                    placeholder="Please enter a password"
                />
            </S.InputWrapper_Password_Check>
            </S.InputWrapper>
            <S.SubmitButton onClick={props.onClickSubmit}>
                SIGN UP
            </S.SubmitButton>
        </S.Wrapper>
    )
}