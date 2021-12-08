import { withAuth } from "../../src/commons/hocs/withAuth";
import MyPage from "../../src/components/units/mypage/MyPage.container";

const MyPagePage = () => {
  return <MyPage />;
};
export default withAuth(MyPagePage);
