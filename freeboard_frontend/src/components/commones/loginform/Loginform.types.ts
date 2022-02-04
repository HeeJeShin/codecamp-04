import { ChangeEventHandler, MouseEventHandler } from "react";

export interface ILogProp {
  onClickSignup: MouseEventHandler<HTMLButtonElement> | undefined;
  handleLogin: MouseEventHandler<HTMLButtonElement> | undefined;
  onChangeMyPassword: ChangeEventHandler<HTMLInputElement> | undefined;
  onChangeMyEmail: ChangeEventHandler<HTMLInputElement> | undefined;
}
