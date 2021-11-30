import  { useRouter } from "next/router";
import HeaderUI from "./Header.presenter";




export default function Header() {
  const router = useRouter();
  
  function onClickMyLogin() {
    router.push("/login");
  }
  function onclickMySignup() {
    router.push("/signup");
  }
  return (
    <>
      <HeaderUI 
      onclickMyLogin={onClickMyLogin} 
      onclickMySignup={onclickMySignup}
      />
    </>
  );
}
