import MyPageSidebarContainer from "../../../src/components/units/mypage/mypagesidebar/Sidebar.container";
import MyPaymentContainer from "../../../src/components/units/mypage/mypayment/MyPayment.container";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 100px;
  width: 1000px;
`;
const MyPaymentPage = () => {
  return (
    <Wrapper>
      <MyPageSidebarContainer />
      <MyPaymentContainer />
    </Wrapper>
  );
};

export default MyPaymentPage;
