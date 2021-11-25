import { BannerSection, MyImage, Wapper } from "./Banner.styles";
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
          <Wapper>
            <MyImage src="/images/벽돌인테리어.PNG" />
            {/* <MyImage src='/images/크리스마스펭수.jpg ' /> */}
          </Wapper>
        </div>

        <div>
          <Wapper>
            <MyImage src="/images/어둡고따뜻한.jpg " />
            {/* <MyImage src='/images/펭수안경.jpg ' /> */}
          </Wapper>
        </div>
        <div>
          <Wapper>
            <MyImage src="/images/원목티비.jpg " />
            {/* <MyImage src='/images/펭수왜여.jpg ' />    */}
          </Wapper>
        </div>
        <div>
          <Wapper>
            <MyImage src="/images/큰햇살.jpg " />
            {/* <MyImage src='/images/펭수진핀.jpeg ' /> */}
          </Wapper>
        </div>
        <div>
          <Wapper>
            <MyImage src="/images/호수.jpg " />
            {/* <MyImage src='/images/펭수핀.png ' /> */}
          </Wapper>
        </div>
      </Slider>
    </BannerSection>
  );
}
