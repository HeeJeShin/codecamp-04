import { ChangeEventHandler, MouseEventHandler, ReactNode } from "react";

export interface ISignupUIProps {
  onClickSubmit: MouseEventHandler<HTMLButtonElement> | undefined;
  myPasswordError: ReactNode;
  onChangeMyPassword: ChangeEventHandler<HTMLInputElement> | undefined;
  myNameError: ReactNode;
  onChangeMyname: ChangeEventHandler<HTMLInputElement> | undefined;
  myEmailError: ReactNode;
  onChangeMyEmail: ChangeEventHandler<HTMLInputElement> | undefined;
  myName: string;
  myEmail: string;
  myPassword: string;
}
