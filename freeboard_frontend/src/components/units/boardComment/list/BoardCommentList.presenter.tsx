import BoardCommentListUIItem from "./BoardCommentList.presenterItem";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import InfinitieScroll from "react-infinite-scroller"

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  if(!props.data) return <div />;
  return (    
     <InfinitieScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchBoardComments.map((el) => (
        <BoardCommentListUIItem key={el._id} el={el} />
      ))}
     </InfinitieScroll>     
  );
}
