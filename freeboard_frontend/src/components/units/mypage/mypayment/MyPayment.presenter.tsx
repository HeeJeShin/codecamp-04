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
        <S.UserID>
          이메일:
          {props.data?.fetchUserLoggedIn?.email}
        </S.UserID>

        <S.Changing>
          충전금액: {props.data?.fetchUserLoggedIn?.userPoint?.amount}원<br />
          {"   "}
        </S.Changing>
        {/* <MypageSearch
        refetch={props.refetch}
        // refetchBoardsCount={props.refetchBoardsCount}
        onChangeKeyword={props.onChangeKeyword}
      /> */}
        <S.MyBtn onClick={props.onClickPayment}>1000원 충전하기</S.MyBtn>
        <S.TableTop />
        <S.Row_TiTle>
          <S.ColumnHeaderBasic>번호</S.ColumnHeaderBasic>
          <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
          <S.ColumnHeaderBasic>가격</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
        </S.Row_TiTle>
        {/* {props.buyData?.fetchUseditemsIBought?.map(
          (el: IUseditem, index: number) => (
            <S.Row key={el._id}>
              <S.ColumnBasic>{index + 1}</S.ColumnBasic>
              <S.ColumnTitle id={el._id}>{el.name}</S.ColumnTitle>
              <S.ColumnBasic>{el.price}</S.ColumnBasic>
              <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
            </S.Row>
          )
        )} */}
      </S.Wrapper>
    </>
  );
};
export default MyPaymentUI;
