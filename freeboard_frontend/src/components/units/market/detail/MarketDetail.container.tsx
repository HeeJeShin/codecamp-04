import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketDetailUI from "./MarketDetail.presenter";
import { CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING, FETCH_USED_ITEM } from "./MarketDetail.queries";

const MarketDetail = () => {
  const router = useRouter();
  const [createPointTransactionOfBuyingAndSelling] = useMutation(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING)
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.useditemId)
    },
  });

  console.log("asdf", data?.fetchUseditem);

  const onClickUpdate = () => {
    router.push(`/market/${router.query.useditemId}`);
  };
  const onClickList = () => {
    router.push(`/market`);
  };

  const onClickBasket = (el:any) => () =>{
    console.log(el);
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");

    let isExit = false;
    baskets.forEach((basketEl:any)=>{
      if(el._id === basketEl._id) isExit =true;
    })
    if(isExit){
      alert("장바구니에 담긴 상품입니다.")
      return;
    }
  }

  async function onClickMoveBuy() {
    try {
      const result = await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.useditemId,
        },
      });
      alert("구매완료");
      console.log(result);
    } catch (error) {
      alert(error.message);
    }
  }

  console.log(data);

  return (
    <>
      <MarketDetailUI
        name={data?.fetchUseditem?.name}
        remarks={data?.fetchUseditem?.remarks}
        contents={data?.fetchUseditem?.contents}
        price={data?.fetchUseditem?.price}
        update={onClickUpdate}
        list={onClickList}
        onClickBasket={onClickBasket}
        onClickMoveBuy={onClickMoveBuy}
      />
    </>
  );
};

export default MarketDetail;
