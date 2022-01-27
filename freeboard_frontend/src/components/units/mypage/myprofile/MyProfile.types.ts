import { ChangeEventHandler, MouseEventHandler } from "react";

export interface IMyProfileProps {
  onClickUpdateName: MouseEventHandler<HTMLButtonElement> | undefined;
  onChangeName: ChangeEventHandler<HTMLInputElement> | undefined;
  onClickResetPassword: MouseEventHandler<HTMLButtonElement> | undefined;
  onChangeCheckPassword: ChangeEventHandler<HTMLInputElement> | undefined;
  onChangePassword: ChangeEventHandler<HTMLInputElement> | undefined;
  data: any;
}
