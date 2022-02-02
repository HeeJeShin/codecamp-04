import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionAnswerArgs,
} from "../../../../../commons/types/generated/types";
import {
  DELETE_USED_ITEM_QUESTION_ANSWER,
  UPADTE_USED_ITEM_QUESTION_ANSWER,
} from "./AnswerList.queries";
import * as S from "./AnswerList.styles";

const AnswerListPresenterItem = (props: any) => {
  const [updateContents, setUpdateContents] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const [updateAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPADTE_USED_ITEM_QUESTION_ANSWER);
  const [deleteAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_USED_ITEM_QUESTION_ANSWER);

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdateContents(event.target.value);
  };

  const onClickUpdate = () => setIsEdit(true);

  const onClickUpdateAnswer = (id: string) => async () => {
    try {
      await updateAnswer({
        variables: {
          useditemQuestionAnswerId: id,
          updateUseditemQuestionAnswerInput: {
            contents: updateContents,
          },
        },
      });
      Modal.success({ content: "수정이 완료되었습니다." });
      setIsEdit(false);
      props.refetch();
    } catch (error) {
      error instanceof Error && Modal.error({ content: error.message });
      setIsEdit(false);
    }
  };

  const onClickDeleteAnswer = (id: string) => async () => {
    try {
      await deleteAnswer({
        variables: { useditemQuestionAnswerId: String(id) },
      });
      Modal.success({ content: "답변이 삭제되었습니다." });
      props.refetch();
    } catch (error) {
      error instanceof Error && Modal.error({ content: error.message });
    }
  };

  return (
    <S.Wrapper>
      {isEdit ? (
        <S.AnswerWrapper key={props.el._id}>
          <S.ContentsInput
            onChange={onChangeContents}
            defaultValue={props.el.contents}
          />
          /
          <br />
          <S.MyName>{props.el.user.name}</S.MyName>
          <S.AnswerBtn onClick={onClickUpdateAnswer(props.el._id)}>
            수정하기
          </S.AnswerBtn>
        </S.AnswerWrapper>
      ) : (
        <S.AnswerWrapper key={props.el._id}>
          <S.MyContents>{props.el.contents} / </S.MyContents>
          <S.MyName>{props.el.user.name}</S.MyName>
          <S.AnswerBtn onClick={onClickUpdate}>수정하기</S.AnswerBtn>
          <S.DeleteBtn onClick={onClickDeleteAnswer(props.el._id)}>
            삭제하기
          </S.DeleteBtn>
        </S.AnswerWrapper>
      )}
    </S.Wrapper>
  );
};

export default AnswerListPresenterItem;
