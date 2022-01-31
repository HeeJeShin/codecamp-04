import { MouseEventHandler } from "react";

export interface IMarketdetailProps {
  onClickDelete: MouseEventHandler<HTMLElement> | undefined;
  update: MouseEventHandler<HTMLElement> | undefined;
  list: MouseEventHandler<HTMLElement> | undefined;
  onClickWishList: MouseEventHandler<HTMLElement> | undefined;
  onClickMoveBuy: MouseEventHandler<HTMLElement> | undefined;
  data: any;
}
