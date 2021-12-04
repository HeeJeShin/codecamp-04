import { useRouter } from "next/router";
import MarketListUI from "../../market/list/MarketList.presenter";
import { MouseEvent } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM } from "./MarketList.queries";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

const MarketList = () => {
  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEM);

  const onClickMove = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) router.push(event.target.id);
  };

  

  return(
    <MarketListUI 
      onClickMove={onClickMove} 
      data={data}
    />
  ) 
};

export default MarketList;
