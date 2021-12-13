import { ChangeEvent, useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { IMutation } from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const { setAccessToken } = useContext(GlobalContext);

  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [loginUserExample] =
    useMutation<Pick<IMutation, "loginUserExample">>(LOGIN_USER);

  function onChangeMyEmail(event: ChangeEvent<HTMLElement>) {
    setMyEmail(event.target.value);
  }

  function onChangeMyPassword(event: ChangeEvent<HTMLElement>) {
    setMyPassword(event.target.value);
  }

  async function onClickLogin() {
    const result = await loginUserExample({
      variables: {
        email: myEmail,
        password: myPassword,
      },
    });
    // localStorage.setItem(
    //   "accessToken",
    //   result.data?.loginUserexample.accessToken || ""
    // );
    localStorage.setItem("refreshToken", "true");
    setAccessToken(result.data?.loginUserExample.accessToken);
    // 여기서 setAccesToken 필요! (글로벌 스테이트에...)

    // const result = awit axios.get("koreanjson.com/posts/1") d이렇나 방식으로 원하는 곳에서 useQuery 필요!!
    // const result = fetchUserLoggenIn
    // setUserInfo(result.data?.fetchUserLoggedIn)

    // 로그인 성공된 페이지로 이동시키기!!
    router.push("/30-02-login-success");
  }

  return (
    <>
      이메일:
      <input type="text" onChange={onChangeMyEmail} />
      비밀번호:
      <input type="password" onChange={onChangeMyPassword} />
      <button onClick={onClickLogin}>로그인하기!!</button>
    </>
  );
}
