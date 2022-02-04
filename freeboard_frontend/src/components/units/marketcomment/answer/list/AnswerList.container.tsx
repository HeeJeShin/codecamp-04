import * as S from "./AnswerList.styles";
import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../../commons/types/generated/types";

import AnswerListPresenterItem from "./AnswerList.container";
import {
  CREATE_USED_ITEM_QUESTION_ANSWERS,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from "./AnswerList.queries";

export default function AnswerList(props: any) {
  const [contents, setContents] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: String(props.questionId) },
  });

  const [createAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USED_ITEM_QUESTION_ANSWERS);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickAddAnswer = async () => {
    await createAnswer({
      variables: {
        useditemQuestionId: String(props.questionId),
        createUseditemQuestionAnswerInput: { contents },
      },
    });
    refetch();
  };

  return (
    <>
      <S.Wrapper>
        <S.QnATitle>ㄴ판매자 답변</S.QnATitle>
        <S.QnAContentsInput
          placeholder="답변을 입력하세요."
          onChange={onChangeContents}
        />
        <S.QnABtn onClick={onClickAddAnswer}>답변 등록하기</S.QnABtn>
        {data?.fetchUseditemQuestionAnswers.map((el) => (
          <AnswerListPresenterItem key={el._id} el={el} refetch={refetch} />
        ))}
      </S.Wrapper>
      <AnswerListPresenterItem />
    </>
  );
}
