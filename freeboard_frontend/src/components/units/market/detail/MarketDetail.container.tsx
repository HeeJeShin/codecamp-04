import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketDetailUI from "./MarketDetail.presenter";
import { FETCH_USED_ITEM } from "./MarketDetail.queries";

const MarketDetail = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.useditemId,
    },
  });

  console.log("asdf", data?.fetchUseditem);

  const onClickUpdate = () => {
    router.push(`/market/${router.query.useditemId}`);
  };
  const onClickList = () => {
    router.push(`/market`);
  };

  return (
    <>
      <MarketDetailUI
        name={data?.fetchUseditem?.name}
        remarks={data?.fetchUseditem?.remarks}
        contents={data?.fetchUseditem?.contents}
        price={data?.fetchUseditem?.price}
        update={onClickUpdate}
        list={onClickList}
      />
    </>
  );
};

export default MarketDetail;
