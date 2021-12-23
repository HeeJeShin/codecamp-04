import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../../commons/types/generated/types";
import QuestionsListUI from "./QuestionsList.presenter";
import { FETCH_USED_ITEM_QUESTIONS } from "./QuestionsList.queries";

const QuestionsList = () => {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,IQueryFetchUseditemQuestionsArgs  
  >(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.useditemId), page: 1 },
  });

  function onLodeMore() {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult?.fetchUseditemQuestions,
          ],
        };
      },
    });
  }

  return <QuestionsListUI data={data} onLodeMore={onLodeMore} />;
};
export default QuestionsList;
