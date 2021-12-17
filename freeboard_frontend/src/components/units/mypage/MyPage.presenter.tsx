import { useQuery } from "@apollo/client";
import Head from "next/head";
import {
  FETCH_USED_ITEMS_BOUGHT,
  FETCH_USER_LOGGED_IN,
} from "./MyPage.queries";
import * as S from "./MyPage.styles";

const MyPageUI = (props) => {



  return (
    <>
     <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
        <div>
            닉네임:{props.el.seller}
        </div>
        <label>충전금액:</label>
      <div>포인트:{props.data?.fetchUserLoggedIn.userPoint.amount}</div>
      <button onClick={props.onClickPayment}>충전고고</button>
        <div> 잔액{props.data?.fetchUserLoggedIn?.userPoint?.amount}</div>
        <div>구입한것</div>
            {props.buyData?.fetchUseditemsIBought?.map((el) => (
                <>
                    <div>{props.el.name}</div>
                    <div>{props.el.price}</div>
                </>
            ))}
    </>

  );
};

export default MyPageUI;
