import MyPageSidebarContainer from "../../../src/components/units/mypage/mypagesidebar/Sidebar.container";
import MyProfileContainer from "../../../src/components/units/mypage/myprofile/MyProfile.container";
import styled from "@emotion/styled";
import { withAuth } from "../../../src/commons/hocs/withAuth";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */

  margin: 0 auto;
  //test test
`;

const MyProfilePage = () => {
  return (
    <Wrapper>
      <MyPageSidebarContainer />
      <MyProfileContainer />
    </Wrapper>
  );
};

export default withAuth(MyProfilePage);
