import { BannerSection, MyImage, Wrapper } from "./Banner.styles";
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
    <BannerSection>
      <Slider {...settings}>
        <div>
          <Wrapper>
            <MyImage src="/images/벽돌인테리어.PNG" />
            {/* <MyImage src='/images/크리스마스펭수.jpg ' /> */}
          </Wrapper>
        </div>

        <div>
          <Wrapper>
            <MyImage src="/images/어둡고따뜻한.jpg " />
            {/* <MyImage src='/images/펭수안경.jpg ' /> */}
          </Wrapper>
        </div>
        <div>
          <Wrapper>
            <MyImage src="/images/원목티비.jpg " />
            {/* <MyImage src='/images/펭수왜여.jpg ' />    */}
          </Wrapper>
        </div>
        <div>
          <Wrapper>
            <MyImage src="/images/큰햇살.jpg " />
            {/* <MyImage src='/images/펭수진핀.jpeg ' /> */}
          </Wrapper>
        </div>
        <div>
          <Wrapper>
            <MyImage src="/images/호수.jpg " />
            {/* <MyImage src='/images/펭수핀.png ' /> */}
          </Wrapper>
        </div>
      </Slider>
    </BannerSection>
  );
}
