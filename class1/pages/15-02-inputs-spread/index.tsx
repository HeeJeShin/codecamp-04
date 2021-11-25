import { useMutation, gql } from "@apollo/client";
import { Content } from "antd/lib/layout/layout";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationBoard3Page() {
  const [myInputs, setMyInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [createBoard] = useMutation(CREATE_BOARD);

  function onChangeMyInputs(event) {
    setMyInputs({
      ...myInputs,
      [event.target.name]: event.target.value,
    });
  }

  async function zzz() {
    const result = await createBoard({
      variables: { ...myInputs },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
  }

  return (
    <>
      작성자: <input type="text" id="writer" onChange={onChangeMyInputs} />
      <br />
      제목: <input type="text" id="title" onChange={onChangeMyInputs} />
      <br />
      내용: <input type="text" id="contents" onChange={onChangeMyInputs} />
      <br />
      <button onClick={zzz}>게시물 등록하기!!!</button>
    </>
  );
}
