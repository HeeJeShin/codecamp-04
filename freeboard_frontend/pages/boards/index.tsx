import BoardBest from "../../src/components/units/board/Bestboard/BoardBest.presenter";
import BoardList from "../../src/components/units/board/list/BoardList.container";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export default function BoardsPage() {
  return (
    <Wrapper>
      <BoardBest />
      <BoardList />
    </Wrapper>
  );
}
