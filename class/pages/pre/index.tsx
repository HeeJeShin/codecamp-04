import styled from "@emotion/styled";

const Wrapper = styled.div`
  box-sizing: border-box;
`;

const Img_Wrapper = styled.div`
  width: 400px;
  margin: 0px auto;
  position: relative; //부모
  :hover .Img_second {
    display: block;
  }
`;

const Img_first = styled.img`
  max-width: 100%; // 사용값이 자신의 값보다 커지는걸 방지.
`;

const Img_second = styled.img`
  max-width: 100%;
  position: absolute; // 자식
  top: 0px;
  left: 0px;
  display: none;
`;

export default function ImageEffectPage() {
  return (
    <Wrapper>
      <h1 style={{ textAlign: "center", fontSize: "54px" }}>hover 이미지효과</h1>
      <br />
      <Img_Wrapper>
        <Img_first src="/images/애플1.jpg" />
        <Img_second className="Img_second" src="/images/애플2.jpg" />
      </Img_Wrapper>
    </Wrapper>
  );
}