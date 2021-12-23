import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { Modal } from "antd";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentWrite from "../write/BoardCommentWrite.Container";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import {
  Avatar,
  Contents,
  DateString,
  DeleteIcon,
  FlexWrapper,
  ItemWrapper,
  MainWrapper,
  WriterWrapper,
  OptionWrapper,
  Star,
  UpdateIcon,
  Writer,
  PasswordInput,
} from "./BoardCommentList.styles";
import { IBoardCommentListUIItemProps } from "./BoardCommentList.types";

export default function BoardCommentListUIItem(
  props: IBoardCommentListUIItemProps
) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  function onClickUpdate() {
    setIsEdit(true);
  }

  async function onClickDelete() {
    const myPassword = prompt("비밀번호를 입력하세요.");
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if(error instanceof Error) alert(error.message);
    }
  }

  return (
    <>
      {!isEdit && (
        <ItemWrapper>
          <FlexWrapper>
            <Avatar id="Abatar_Icon" />

            <MainWrapper>
              <WriterWrapper>
                <Writer>{props.el?.writer}</Writer>
                <Star disabled value={props.el?.rating} />
              </WriterWrapper>
              <Contents>{props.el?.contents}</Contents>
            </MainWrapper>
            <OptionWrapper>
              <UpdateIcon id="Update_Icon" onClick={onClickUpdate} />
              <DeleteIcon id="Delete_Icon" onClick={onClickDelete} />
            </OptionWrapper>
          </FlexWrapper>
          <DateString>{props.el?.createdAt}</DateString>
        </ItemWrapper>
      )}
      {isEdit && (
        <BoardCommentWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </>
  );
}
