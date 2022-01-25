import MyPageSidebarContainer from "../../../src/components/units/mypage/mypagesidebar/Sidebar.container";
import MyProfileContainer from "../../../src/components/units/mypage/myprofile/MyProfile.container";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 100px;
  width: 1000px;
`;

const MyProfilePage = () => {
  return (
    <Wrapper>
      <MyPageSidebarContainer />
      <MyProfileContainer />
    </Wrapper>
  );
};

export default MyProfilePage;
