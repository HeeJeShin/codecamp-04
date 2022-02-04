import { MouseEventHandler } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketdetailProps {
  onClickDelete: MouseEventHandler<HTMLElement>;
  update: MouseEventHandler<HTMLElement>;
  list: MouseEventHandler<HTMLElement>;
  onClickWishList: MouseEventHandler<HTMLElement>;
  onClickMoveBuy: MouseEventHandler<HTMLElement>;
  data?: Pick<IQuery, "fetchUseditem">;
}
