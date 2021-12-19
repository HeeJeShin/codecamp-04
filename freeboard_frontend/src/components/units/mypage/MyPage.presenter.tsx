import Head from "next/head";
import { getDate } from "../../../commons/libraries/utils";
import * as S from "./MyPage.styles";
import BoardSearch from "../../commones/searchbars/boardsearchbar/BoardSearch.container";
import Paginations01 from "../../commones/paginations/01/Paginations01.container";
import { v4 as uuidv4 } from "uuid";

const MyPageUI = (props) => {
  return (
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
      <BoardSearch
        refetch={props.refetch}
        refetchBoardsCount={props.refetchBoardsCount}
        onChangeKeyword={props.onChangeKeyword}
      />

      <S.TableTop />
      <S.Row_TiTle>
        <S.ColumnHeaderBasic>번호</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.Row_TiTle>
      {/* <div>구입한것</div>
      {props.buyData?.fetchUseditemsIBought?.map((el: any) => (
        <div>
          <div>{el.name}</div>
          <div>{el.price}</div>
        </div>
      ))}
      <button onClick={props.onClickPayment}>1000원 충전하기</button> */}

      {props.buyData?.fetchUseditemsIBought?.map((el: any, index) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>{index + 1}</S.ColumnBasic>
          <S.ColumnTitle id={el._id}>
            {el.name
              .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
              .split("@#$%")
              .map((el: String) => (
                <S.TextToken key={uuidv4()} isMatched={props.keyword === el}>
                  {el}
                </S.TextToken>
              ))}
          </S.ColumnTitle>
          <S.ColumnBasic>{el.price}</S.ColumnBasic>
          <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
        </S.Row>
      ))}
    </S.Wrapper>
  );
};

export default MyPageUI;
