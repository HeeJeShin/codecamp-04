import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: "61bab569717be5002baa75a8" } }
  );

  function onClcikOptimisticUi() {
    // 여기서 좋아요 증가시키는 mutatio
    likeBoard({
      variables: { boardId: "61bab569717be5002baa75a8" },
    //   refetchQueries: [
    //       {
    //           query: FETCH_BOARD,
    //           variables: {boardId:"61bab569717be5002baa75a8"}
    //       }
    //   ] //이거는 리패치 될때까지 기다려야됨
        optimisticResponse:{
            likeBoard: (data?.fetchBoard.likeCount || 0) + 1
        },
        update(cache, { data }){
            cache.writeQuery({
                query:FETCH_BOARD,
                variables:{boardId: "61bab569717be5002baa75a8"},
                data: {
                    fetchBoard: {
                        _id: "61bab569717be5002baa75a8",
                        __typeneme: "Board",
                        likeCount: data?.likeBoard,
                    }
                }
            })
        }
    });
  }

  return (
    <>
      <div>좋아요개수:{data?.fetchBoard.likeCount}</div>
      <button onClick={onClcikOptimisticUi}> 좋아요 올리기!!!</button>
    </>
  );
}
