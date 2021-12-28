import { useMutation, useQuery } from "@apollo/client";
import  { useRouter } from "next/router";
import { IQuery } from "../../../../commons/types/generated/types";
import HeaderUI from "./Header.presenter";
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from "./Header.queries";




export default function Header() {
  const router = useRouter();

  const [logoutUser] = useMutation(LOGOUT_USER);

  const{data} = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  async function onClickLogout(){
    await logoutUser();
    localStorage.removeItem("refreshToken")
    router.reload();
  }
  
  function onClickMove(event) {
    router.push(event.target.id);
  }
  return (
    <>
      <HeaderUI 
      onClickMove={onClickMove}
      onClickLogout={onClickLogout}
      data={data}
      />
    </>
  );
}
