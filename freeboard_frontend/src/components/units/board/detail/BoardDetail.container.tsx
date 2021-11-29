import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_BOARD, DELETE_BOARD, LIKE_BOARD, DISLIKE_BOARD} from "./BoardDetail.queries";
//import { IBoardDetailUIProps } from "./BoardDetail.types";

import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] =
    useMutation<Pick<IMutation, "deleteBoard">, IMutationDeleteBoardArgs>(
      DELETE_BOARD
    );
  const [likeBoard] =  //좋아요
    useMutation<Pick<IMutation, "likeBoard">, IMutationLikeBoardArgs>(
      LIKE_BOARD
    );
  const [dislikeBoard] =  //싫어요
    useMutation<Pick<IMutation, "dislikeBoard">, IMutationDislikeBoardArgs>(
      DISLIKE_BOARD
    );

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: String(router.query.boardId) } }
    
  );
    console.log(data)
  function onClickMoveToList() {
    // alert("눌리긴 눌렸네요.");
    router.push("/boards");
  }

  async function onClickDelete() {
    try {
      await deleteBoard({ variables: { boardId: String (router.query.boardId) } });
      alert("게시물이 삭제되었습니다.");
      router.push("/boards");
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClicklike() {
    const result = await likeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  }

  function onClickDislike() {
    const result = dislikeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  }

  async function onClickMoveToUpdate() {
    router.push(`/boards/${router.query.boardId}/edit`);
  }

  const isActive = true;

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickDelete={onClickDelete}
      onClickMoveToUpdate={onClickMoveToUpdate}
      onClickLike={onClicklike}
      onClickDislike={onClickDislike}
    />
  );
}

//error 왜 안되나?
