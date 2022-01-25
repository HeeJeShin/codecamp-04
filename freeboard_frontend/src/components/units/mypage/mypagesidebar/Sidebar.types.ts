import { MouseEventHandler } from "react";

export interface ISidebarProps {
  onClickMove: MouseEventHandler<HTMLDivElement> | undefined;
  data: any;
}
