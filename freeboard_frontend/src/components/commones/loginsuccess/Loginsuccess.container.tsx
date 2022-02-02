import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../../commons/types/generated/types";
import LoginSuccessUI from "./Loginsuccess.presenter";
import { FETCH_USER_LOGGED_IN } from "./Loginsuccess.queries";

const LoginSuccess = () => {
  const router = useRouter();
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  function onClickWriter() {
    alert("글쓰기로 이동합니다");
    router.push("/market/new");
  }
  console.log(data);

  return <LoginSuccessUI data={data} onClickWriter={onClickWriter} />;
};

export default LoginSuccess;

//화살표함수로
