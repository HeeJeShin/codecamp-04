import { MouseEventHandler } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ISidebarProps {
  onClickMove: MouseEventHandler<HTMLDivElement> | undefined;
  data?: Pick<IQuery, "fetchUserLoggedIn">;
}
