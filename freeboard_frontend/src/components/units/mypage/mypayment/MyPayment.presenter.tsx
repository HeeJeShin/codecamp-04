import * as S from "./MyPayment.styles";
import { IMyPaymentProps } from "./MyPayment.types";
import Head from "next/head";
const MyPaymentUI = (props: IMyPaymentProps) => {
  return (
    <>
      <S.Wrapper>
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
          이메일:
          {props.data?.fetchUserLoggedIn?.email}
        </div>
        <label>충전금액:</label>
        <div>
          {props.data?.fetchUserLoggedIn?.userPoint?.amount}원<br />
          {"   "}
        </div>
        {/* <MypageSearch
        refetch={props.refetch}
        // refetchBoardsCount={props.refetchBoardsCount}
        onChangeKeyword={props.onChangeKeyword}
      /> */}
        <button onClick={props.onClickPayment}>1000원 충전하기</button>
      </S.Wrapper>
    </>
  );
};
export default MyPaymentUI;
