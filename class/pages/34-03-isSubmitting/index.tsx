import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";
import { Modal } from "antd";
import { result } from "lodash";

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput){
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

export default function IsSubmittingPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
  const [inputs, setInputs] = useState(defaultInputs);
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const onChangeInputs = (name) => (event: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [name]: event.target.value,
    }));
  };

   const onClickSubmit = async () => {
    setIsSubmitting(true)
    try {
      const result = await createBoard({
        variables: { createBoardInput: { ...inputs } },
      });
      console.log(result);
        // Modal.confirm({ content: "등록에 성공 ok!♬" });
      //  router.push로 다이나믹 라우팅 => result.data.createBoard._id
      setIsSubmitting(false)
    } catch (error) {
      Modal.error({ content: error.message });
    }
}

  return (
    <>
      작성자 : <input type="text" onChange={onChangeInputs("writer")} />
      <br />
      비밀번호: <input type="password" onChange={onChangeInputs("password")} />
      <br />
      제목: <input type="text" onChange={onChangeInputs("title")} />
      <br />
      내용: <input type="text" onChange={onChangeInputs("contents")} />
      <br />
      <button onClick={onClickSubmit} disabled={isSubmitting} >등록하기★☆</button>
    </>
  );
}
