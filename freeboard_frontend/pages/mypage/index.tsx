import { withAuth } from "../../src/commons/hocs/withAuth";
import MyPage from "../../src/components/units/mypage/MyPage.container";
import MyPageSidebarContainer from "../../src/components/units/mypage/mypagesidebar/Sidebar.container";
import MyStoreContainer from "../../src/components/units/mypage/mystore/MyStore.container";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 100px;
  width: 1000px;
`;

const MyPagePage = () => {
  return (
    <Wrapper>
      <MyPageSidebarContainer />
      <MyStoreContainer />
    </Wrapper>
  );
};
export default withAuth(MyPagePage);
