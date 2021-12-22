import * as S from "./MarketCommentList.styles"
import { IMarketCommentListUIProps } from "./MarketCommentList.types"
import InfinitieScroll from "react-infinite-scroller"
import MarketCommentListUIItem from "./MarketCommentList.presenterItem";

const MarketCommentListUI = (props: IMarketCommentListUIProps) => {
    if(!props.data) return <div />;
    return(
        <S.Wrapper>
            <InfinitieScroll pageStart={0} loadMore={props.onLodeMore} hasMore={true}>
                {props.data?.fetchUseditemQuestions.map((el) => (
                  <MarketCommentListUIItem  key = {el._id} el={el} />
                ))}
            </InfinitieScroll>
        </S.Wrapper>
    )
}

export default MarketCommentListUI