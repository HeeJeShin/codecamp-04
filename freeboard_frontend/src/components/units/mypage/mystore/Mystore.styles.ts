import styled from "@emotion/styled";
import { ITextTokenProps } from "../../board/list/BoardList.types";

export const Wrapper = styled.div`
  width: 70%;
`;

export const Title = styled.div``;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const Row_TiTle = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
  font-size: 16px;
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const Row = styled.div``;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  :hover {
    color: blue;
  }
`;

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "red" : "black")};
`;
