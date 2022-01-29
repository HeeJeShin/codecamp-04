import styled from "@emotion/styled";
import { ITextTokenProps } from "./BoardList.types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const BoardSearchbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Search_Input = styled.input`
  width: 776px;
  height: 52px;
  border: none;
  background-color: #edeae3;
  /* box-sizing: border-box; */
  padding-left: 10px;
`;

export const Search_Yydd = styled.input`
  width: 244px;
  height: 52px;
  border: none;
  background-color: #edeae3;
  padding-left: 10px;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableWrapper = styled.div`
  width: 900px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row_TiTle = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
  font-size: 16px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
  font-size: 13px;

  :hover {
    color: #f3bac0;
  }
`;

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "red" : "black")};
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderNumber = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
  /* text-indent: 270px; */
`;

export const ColumnHeaderData = styled.div`
  width: 5%;
  text-align: right;
`;

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

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
`;

export const MyButton = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  border: none;
  font-size: 16px;

  :hover {
    background-color: #edeae3;
  }
`;
