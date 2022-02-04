import { MouseEventHandler } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IMyPaymentProps {
  onClickPayment: MouseEventHandler<HTMLButtonElement> | undefined;
  data?: Pick<IQuery, "fetchUserLoggedIn">;
}
