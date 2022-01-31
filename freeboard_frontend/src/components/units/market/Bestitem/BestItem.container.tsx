import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../../../commons/types/generated/types";
import BestItemUI from "./Bestitem.presenter";
import { FETCH_USED_ITEMS_OF_THEBEST } from "./Bestitem.queries";
import { MouseEvent, SyntheticEvent } from "react";

const BestItem = () => {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(
    FETCH_USED_ITEMS_OF_THEBEST
  );

  const onError = (event: SyntheticEvent<HTMLImageElement>) => {
    event.target instanceof HTMLImageElement &&
      event.target.setAttribute(
        "src",
        "http://localhost:3000/images/%EC%B1%85%EC%9C%84%EC%A1%B0%EB%AA%85.jpg"
      );
  };
  const onClickMoveToMarketDetail = (event: MouseEvent<HTMLImageElement>) => {
    if (event.target instanceof Element) {
      console.log(event.target.id);
      router.push(`/market/${event.target.id}`);
    }
  };

  return (
    <BestItemUI
      data={data}
      onError={onError}
      onClickMoveToMarketDetail={onClickMoveToMarketDetail}
    />
  );
};
export default BestItem;
