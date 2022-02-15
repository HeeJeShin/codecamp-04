import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 0 auto;
  font-size: 20px;
  padding-right: 500px;
`;

export const UserID = styled.div`
  padding: 10px;
`;

export const ChargingName = styled.label`
  padding: 10px;
`;

export const Changing = styled.div`
  padding: 10px;
`;

export const MyBtn = styled.button`
  margin: 10px;

  border: none;
  background-color: #b7c5c8;
  :hover {
    cursor: pointer;
  }
`;

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

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
  font-size: 15px;

  :hover {
    color: #f3bac0;
    cursor: pointer;
  }
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
