import styled from "@emotion/styled";

export const BannerSection = styled.section`
  width: 70%;
  height: 500px;
  /* background-color: #edceba; */
  overflow: hidden;
  margin-left: 300px;

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 70%;
    margin: 70px;
  }

  @media (max-width: 767px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const MyImage = styled.img`
  width: 100%;
  height: 500px;
  /* border-radius: 50%; */
`;

export const WidthWrapper = styled.div`
  display: flex;
  /* flex-direction: center; */
  justify-content: center;
`;

export const Wrapper = styled.div`
  padding: 30px;
`;

export const BannerText = styled.div`
  font-size: 48px;
  text-align: center;
`;
