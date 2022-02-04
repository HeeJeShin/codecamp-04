import * as S from "./QuestionsList.styles";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";

import { useState, ChangeEvent } from "react";
import { Modal } from "antd";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./QuestionsList.queries";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../../commons/types/generated/types";
import QuestionListPresenterItem from "./QuestionstList.presenterItem";
import AnswerList from "../../answer/list/AnswerList.container";
import InfinitieScroll from "react-infinite-scroller";
export default function QuestionList() {
  const router = useRouter();

  const [contents, setContents] = useState("");
  const [createQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);

  const {
    data: useditemQuestions,
    fetchMore,
    refetch,
  } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: String(router.query.useditemId),
    },
  });

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickAddQuestion = async () => {
    try {
      await createQuestion({
        variables: {
          createUseditemQuestionInput: { contents },
          useditemId: String(router.query.useditemId),
        },
      });
      refetch();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onLoadMore = () => {
    console.log(useditemQuestions?.fetchUseditemQuestions);
    if (!useditemQuestions) return;

    fetchMore({
      variables: {
        page:
          Math.ceil(useditemQuestions.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return {
            fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
          };

        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return (
    <S.Wrapper>
      <S.QnATitle>문의하기</S.QnATitle>
      <S.QnAWrapper>
        <S.QnAContentsInput
          placeholder="문의내용"
          onChange={onChangeContents}
        />
        <S.QnABtn onClick={onClickAddQuestion}>문의 등록하기</S.QnABtn>
      </S.QnAWrapper>
      <InfinitieScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {useditemQuestions?.fetchUseditemQuestions.map((el) => (
          <S.QnAListWrapper key={el._id}>
            <QuestionListPresenterItem el={el} refetch={refetch} />

            <AnswerList questionId={el._id} />
          </S.QnAListWrapper>
        ))}
        {/* <button onClick={onLoadMore}>더보기</button> */}
      </InfinitieScroll>
    </S.Wrapper>
  );
}
