import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../MyPage.queries";
import MyPaymentUI from "./MyPayment.presenter";
import { CREATE_POINT_TRANSACTION_OF_LOADING } from "./MyPayment.queries";

const MyPaymentContainer = () => {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [createPointTrancationOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);
  function onClickPayment() {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "hiheeje point",
        amount: 1000,
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
          } catch (error: unknown) {
            if (error instanceof Error) console.log(error.message);
          }

          //    createPointTransactionsOfLoading 뮤테이션 실행하기!!(impUid 인자로 넘기기!!!)
        } else {
          //    결제 실패시
        }
      }
    );
  }
  return <MyPaymentUI data={data} onClickPayment={onClickPayment} />;
};

export default MyPaymentContainer;
