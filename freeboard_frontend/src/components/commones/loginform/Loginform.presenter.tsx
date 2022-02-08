import * as S from "./Loginform.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ILogProp } from "./Loginform.types";
export default function LoginFormUI(props: ILogProp) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <S.Wrapper>
      <S.Login_Wrapper>
        <S.H_Wrapper>
          <h1>log-in</h1>
        </S.H_Wrapper>

        <S.Input_Wrapper>
          <S.Label>email:</S.Label>
          <S.MyEmail_input type="text" onChange={props.onChangeMyEmail} />
        </S.Input_Wrapper>
        <S.Input_Wrapper>
          <S.Label>password:</S.Label>
          <S.MyPassword_input
            type="password"
            onChange={props.onChangeMyPassword}
          />
        </S.Input_Wrapper>

        <S.Submit_Wrapper>
          <S.Submit onClick={props.handleLogin}>로그인</S.Submit>
          <S.Submit onClick={props.onClickSignup}>회원가입</S.Submit>
        </S.Submit_Wrapper>
        <div>ID: heeje@site.com</div>
        <div>PW:hj1234</div>
      </S.Login_Wrapper>
      <S.MySlider {...settings}>
        <S.Slider_Image>
          <S.MyImage src="/images/벽조명.jpg " />
        </S.Slider_Image>
        <S.Slider_Image>
          <S.MyImage src="/images/나무식탁.jpg " />
        </S.Slider_Image>
      </S.MySlider>
    </S.Wrapper>
  );
}
