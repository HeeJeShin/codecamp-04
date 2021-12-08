import Head from "next/head";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IMutation } from "../../../src/commons/types/generated/types";

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      balance
      status
      statusDetail
      useditem {
        name
        price
        remarks
        contents
      }
    }
  }
`;

const FETCH_USER_LOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
      userPoint {
        amount
      }
    }
  }
`;

export default function PaymentPage() {
  const router = useRouter();

  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">
  >(CREATE_POINT_TRANSACTION_OF_LOADING);

  const { data } = useQuery(FETCH_USER_LOGGEDIN);

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
            const result = createPointTransactionOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
              refetchQueries: [{ query: CREATE_POINT_TRANSACTION_OF_LOADING }],
            });
          } catch (error) {
            alert(error.message);
          }

          //    createPointTransactionsOfLoading 뮤테이션 실행하기!!(impUid 인자로 넘기기!!!)
        } else {
          //    결제 실패시
        }
      }
    );
  }

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
      <label>충전금액:</label>
      <div>포인트:{data?.fetchUserLoggedIn.userPoint.amount}</div>
      <button onClick={onClickPayment}>충전고고</button>
    </>
  );
}
