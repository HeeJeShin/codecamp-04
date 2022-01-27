import { MouseEventHandler } from "react";

export interface IMyPaymentProps {
  onClickPayment: MouseEventHandler<HTMLButtonElement> | undefined;
  data: any;
}
