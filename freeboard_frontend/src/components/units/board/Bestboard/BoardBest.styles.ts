import styled from "@emotion/styled";
import { Card } from "antd";

export const Best_Wrapper = styled.div`
  /* margin-left: 200px; */
  padding: 100px;
  @media (min-width: 768px) and (max-width: 1190px) {
    margin: 0 auto;
  }
  @media (max-width: 767px) {
    margin: 0 auto;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;

  margin: 0 auto;
  height: 100%;
  @media (min-width: 768px) and (max-width: 1190px) {
    flex-wrap: wrap;

    display: flex;
    justify-content: space-around;
  }
  @media (max-width: 767px) {
    /* display: flex; */
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const Best_Title = styled.h1`
  font-size: 30px;
  /* margin-bottom: 100px; */
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (min-width: 768px) and (max-width: 1190px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 20px;
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 16px;
    font-weight: 900;
  }
`;

export const BestCard = styled(Card)`
  width: 240px;
  height: 400px;
  margin: 10px;
  @media (min-width: 768px) and (max-width: 1199px) {
    height: 40%;
    width: 40%;
  }
  @media (max-width: 767px) {
    height: 90%;
    width: 90%;
  }
`;
