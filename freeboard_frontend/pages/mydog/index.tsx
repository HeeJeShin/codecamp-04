import axios from "axios";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  box-sizing: border-box;
  /* width: 1200px; */

  /* border: 1px solid black; */
  margin: 0 auto;
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  /* box-shadow: 0px 0px 10px #b8b8b0; */
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 90px;
  padding-bottom: 100px;
  font-size: 90px;
`;

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1000px;
`;

const Myimg = styled.img`
  width: 400px;
  height: 500px;
  padding: 10px;
`;

export default function MyDogPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    async function myDOG() {
      const result: any = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setDogUrl(result.data.message);
    }
    myDOG();
  }, []);

  return (
    <Wrapper>
      <Title> 남의집 댕댕이</Title>
      <ImgWrapper>
        <Myimg src={dogUrl} />
        <Myimg src={dogUrl} />
        <Myimg src={dogUrl} />
      </ImgWrapper>
    </Wrapper>
  );
}
