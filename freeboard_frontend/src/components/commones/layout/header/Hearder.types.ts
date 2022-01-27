import { MouseEventHandler } from "react";

export interface IHeaderProps {
  onClickLogout: MouseEventHandler<HTMLDivElement> | undefined;
  data: any;
  onClickMove: any;
}
