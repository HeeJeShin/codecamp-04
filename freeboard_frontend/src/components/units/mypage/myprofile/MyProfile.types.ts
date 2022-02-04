import { ChangeEventHandler, MouseEventHandler } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IMyProfileProps {
  onClickUpdateName: MouseEventHandler<HTMLButtonElement> | undefined;
  onChangeName: ChangeEventHandler<HTMLInputElement> | undefined;
  onClickResetPassword: MouseEventHandler<HTMLButtonElement> | undefined;
  onChangeCheckPassword: ChangeEventHandler<HTMLInputElement> | undefined;
  onChangePassword: ChangeEventHandler<HTMLInputElement> | undefined;
  data?: Pick<IQuery, "fetchUserLoggedIn">;
}
