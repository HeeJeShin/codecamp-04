import {
  BannerSection,
  BannerText,
  MyImage,
  WidthWrapper,
  Wrapper,
} from "./Banner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <BannerSection>
        <Slider {...settings}>
          <WidthWrapper>
            <Wrapper>
              <MyImage src="/images/벽돌인테리어.png" />
            </Wrapper>
          </WidthWrapper>

          <div>
            <Wrapper>
              <MyImage src="/images/어둡고따뜻한.jpg " />
            </Wrapper>
          </div>
          <div>
            <Wrapper>
              <MyImage src="/images/원목티비.jpg " />
            </Wrapper>
          </div>
          <div>
            <Wrapper>
              <MyImage src="/images/큰햇살.jpg " />
            </Wrapper>
          </div>
          <div>
            <Wrapper>
              <MyImage src="/images/호수.jpg " />
            </Wrapper>
          </div>
        </Slider>
      </BannerSection>
      <BannerText> HI HEEJE에서 인테리어의 꿈을 이루세요</BannerText>
    </>
  );
}
