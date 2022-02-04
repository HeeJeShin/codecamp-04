import { useRouter } from "next/router";
import MarketListUI from "../../market/list/MarketList.presenter";
import { MouseEvent, useState } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEMS } from "./MarketList.queries";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";

export default function MarketList() {
  const router = useRouter();

  //const [startPage] = useState(1);
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  const onClickMove = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) router.push(event.target.id);
  };

  function onLoadMore() {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  }

  const onClickMoveToMarketDetail = (event: MouseEvent<HTMLButtonElement>) => {
    // console.log(event.target.id);
    router.push(`/market/${(event.target as Element).id}`);
  };

  const onClickBasket = (el: IUseditem) => () => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    let isExists = false;
    baskets.forEach((basketEl: IUseditem) => {
      if (el._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      alert("이미 담겨져 있습니다.");
      return;
    }
    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("basket", JSON.stringify(baskets));
    alert("장바구니에 담았습니다.");
  };
  return (
    <MarketListUI
      onClickMove={onClickMove}
      data={data}
      loadMore={onLoadMore}
      onClickMoveToMarketDetail={onClickMoveToMarketDetail}
      onClickBasket={onClickBasket}

      // fetchMore={fetchMore}
    />
  );
}
