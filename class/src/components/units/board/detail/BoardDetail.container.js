import { useRouter } from 'next/router'
import BoardDetailUI from './BoardDetail.presenter'
import { useQuery, useMutation } from '@apollo/client'
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";

export default function BoardDetail(){
  const router = useRouter()
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  })

  function onClickMoveToList() {
    router.push("/boards");
  }

  async function onClickDelete() {
    try {
      await deleteBoard({ variables: { boardId: router.query.boardId } });
      alert("게시물이 삭제되었습니다.");
      router.push("/boards");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickDelete={onClickDelete}
    />
  );
}