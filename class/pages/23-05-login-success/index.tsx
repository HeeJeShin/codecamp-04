import { gql, useQuery } from "@apollo/client";
import { withAuth } from "../../src/components/hocs/withAuth";
import { IQuery } from "../../src/commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

function LoginSuccessPage() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  return (
    <>
      <div>로그인에 성공하였습니다!!!!!</div>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다!!!</div>
    </>
  );
}
export default withAuth(LoginSuccessPage);
