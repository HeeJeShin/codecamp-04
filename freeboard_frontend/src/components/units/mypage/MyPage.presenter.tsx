import { useQuery } from "@apollo/client";
import {
  FETCH_USED_ITEMS_BOUGHT,
  FETCH_USER_LOGGED_IN,
} from "./MyPage.queries";
import * as S from "./MyPage.styles";

const MyPageUI = () => {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: buyData } = useQuery(FETCH_USED_ITEMS_BOUGHT);


  return (
    <>
        <div>
            닉네임
        </div>
        <div> 잔액{data?.fetchUserLoggedIn?.userPoint?.amount}</div>
        <div>구입한것</div>
            {buyData?.fetchUseditemsIBought?.map((el) => (
                <>
                    <div>{el.name}</div>
                    <div>{el.price}</div>
                </>
            ))}
    </>

  );
};

export default MyPageUI;
