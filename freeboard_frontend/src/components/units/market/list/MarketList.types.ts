import { IQuery, IUseditem } from "../../../../commons/types/generated/types";
import { MouseEvent, MouseEventHandler } from "react";

export interface IMarketListUIProps {
  // id: string | undefined;
  // onDetail: MouseEventHandler<HTMLButtonElement> | undefined;
  // onBasket: MouseEventHandler<HTMLButtonElement> | undefined;
  // el: IUseditem;
  loadMore: (page: number) => void;
  onClickMove: any;
  onClickMoveToMarketDetail: any;
  onClickBasket: (el: IUseditem) => () => void;
  data?: Pick<IQuery, "fetchUseditems">;
  // refetch: (
  //   variables: Partial<IQueryFetchUseditemsArgs>
  // ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
}
