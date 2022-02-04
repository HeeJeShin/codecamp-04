import MyPageSidebarContainer from "../../../src/components/units/mypage/mypagesidebar/Sidebar.container";
import MyStoreContainer from "../../../src/components/units/mypage/mystore/MyStore.container";
import styled from "@emotion/styled";
import { withAuth } from "../../../src/commons/hocs/withAuth";
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 100px;
  width: 1000px;
`;

const MyStorePage = () => {
  return (
    <Wrapper>
      <MyPageSidebarContainer />
      <MyStoreContainer />
    </Wrapper>
  );
};
export default withAuth(MyStorePage);
