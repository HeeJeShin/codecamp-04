import styled from "@emotion/styled";
import { Card } from "antd";

export const Wrapper = styled.div`
  margin-bottom: 50px;
  flex-direction: center;
`;

export const Title = styled.h1`
  font-size: 28px;
  text-align: center;
  display: flex;
  flex-direction: center;
  text-indent: 120px;
`;

export const Wrapper_Card = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const BestCard = styled(Card)`
  width: 240px;
  height: 400px;
  background-color: white;
  margin: 10px;
`;

export const myimg = styled.img`
  height: 200px;
`;
