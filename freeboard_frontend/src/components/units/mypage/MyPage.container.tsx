import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
} from "../../../commons/types/generated/types";
import MyPageUI from "./MyPage.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USED_ITEMS_BOUGHT,
  FETCH_USER_LOGGED_IN,
} from "./MyPage.queries";

const MyPage = () => {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const { data: buyData } = useQuery<
    Pick<IQuery, "fetchUseditemsIBought">,
    IQueryFetchUseditemsIBoughtArgs
  >(FETCH_USED_ITEMS_BOUGHT,{variables: {page: startPage}});
  
  const [createPointTrancationOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);

  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(loginData);
  function onClickPayment() {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "hiheeje point",
        amount: 100,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "", //모바일 결제후 리다이렉트될 주소!!
      },
      async (rsp) => {
        // callback
        if (rsp.success) {
          //    결제 성공시
          console.log(rsp);
          try {
            const result = createPointTrancationOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
              refetchQueries: [{ query: CREATE_POINT_TRANSACTION_OF_LOADING }],
            });
          } catch (error) {
            console.log(error.message);
          }

          //    createPointTransactionsOfLoading 뮤테이션 실행하기!!(impUid 인자로 넘기기!!!)
        } else {
          //    결제 실패시
        }
      }
    );
  }
  function onChangeKeyword(value: string) {
    setKeyword(value);
  }

  return (
    <MyPageUI
      onClickPayment={onClickPayment}
      data={loginData}
      buyData={buyData}      
      startPage={startPage}
      setStartPage={setStartPage}
      onChangeKeyword={onChangeKeyword}
    />
  );
};

export default MyPage;
