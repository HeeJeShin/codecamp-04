import { gql } from "@apollo/client";
import * as Sentry from "@sentry/nextjs";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($createBoadInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const defaultInputs = {
  writer: "",
  password: "",
  title: "",
  contents: "",
};

export default function InSubmittingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChangeInputs = (name) => (event) => {
    setInputs((prev) => ({
      ...prev,
      [name]: event.target.value,
    }));
  };

  const onClick;

  return (
    <>
      작성자: <input type="text" onChange={onChangeInputs("writer")} />
      비밀번호: <input type="password" onChange={} />
      제목: <input type="text" onChange={onChangeInputs("title")} />
      내용: <input type="text" onChange={onChangeInputs("contents")} />
      <button onClick={onClickSubmit} disabled={isSubmitting}>
        {" "}
        등록하기
      </button>
    </>
  );
}
