import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../MyPage.queries";
import MyProfileUI from "./MyProfile.presenter";
import { RESORT_USER_PASSWORD, UPDATE_USER_INPUT } from "./MyProfile.queries";

const MyProfileContainer = () => {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const [resetUserPassword] = useMutation(RESORT_USER_PASSWORD);
  const [updateUser] = useMutation(UPDATE_USER_INPUT);
  const [password, setPassword] = useState("");
  const [ckeckPassword, setCheckPassword] = useState("");
  const [name, setName] = useState("");

  console.log(data);

  const onChangePassword = (e: ChangeEvent<HTMLElement>) => {
    setPassword(e.target.value);
  };

  const onChangeCheckPassword = (e: ChangeEvent<HTMLElement>) => {
    setCheckPassword(e.target.value);
  };

  const onChangeName = (e: ChangeEvent<HTMLElement>) => {
    setName(e.target.value);
  };

  const onClickResetPassword = async () => {
    if (password !== ckeckPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      await resetUserPassword({
        variables: { password },
      });
      alert("비밀번호를 수정했습니다.");
    } catch (error) {
      error instanceof Error && error.message;
    }
  };

  const onClickUpdateName = async () => {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            name,
          },
        },
      });
      alert(`${name}로 이름이 수정되었습니다.`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MyProfileUI
      onChangePassword={onChangePassword}
      onChangeCheckPassword={onChangeCheckPassword}
      onChangeName={onChangeName}
      onClickResetPassword={onClickResetPassword}
      onClickUpdateName={onClickUpdateName}
      data={data}
    />
  );
};

export default MyProfileContainer;
