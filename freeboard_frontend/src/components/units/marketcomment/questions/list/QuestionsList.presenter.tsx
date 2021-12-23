import * as S from "./QuestionsList.styles"
import { IQuestionsListUIProps } from "./QuestionsList.types"
import InfinitieScroll from "react-infinite-scroller"
import MarketCommentListUIItem from "./QuestionstList.presenterItem";

const QuestionsListUI = (props: IQuestionsListUIProps) => {
    if(!props.data) return <div />;
    return(
        <S.Wrapper>
            <InfinitieScroll pageStart={0} loadMore={props.onLodeMore} hasMore={true}>
                {props.data?.fetchUseditemQuestions.map((el:String) => (
                  <MarketCommentListUIItem  key = { el._id} el={el} />
                //   여기다가 대댓글 컴포넌트 넣기
                ))}
            </InfinitieScroll>
        </S.Wrapper>
    )
}

export default QuestionsListUI