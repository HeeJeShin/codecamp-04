import { IconButtonProps } from "@material-ui/core";
import * as S from "./MarketList.styles";
import { IMarketListUIProps } from "./MarketList.types";
import RecipeReviewCard from "../../../../commons/card/Card01";
import InfinitieScroll from "react-infinite-scroller";
interface ExpandMoreProps {
  data: any;
  onClickMove: any;
  loadMore: () => void;
}

const MarketListUI = (props: ExpandMoreProps) => {
  return (
    <S.Wrapper>
      <S.Wrapper_Infini>
        <InfinitieScroll
          pageStart={0}
          loadMore={props.loadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchUseditems.map((el: any, index: any) => (
            <S.Wrapper_Card>
              <RecipeReviewCard
                id="market/${id}"
                onClick={props.onClickMove}
                key={el._id}
                el={el}
              />
              {/* <div>{el.name}</div>/ */}
            </S.Wrapper_Card>
          ))}
        </InfinitieScroll>
      </S.Wrapper_Infini>

      <S.Mybutton id="/market/new" onClick={props.onClickMove}>
        상품등록
      </S.Mybutton>
    </S.Wrapper>
  );
};
export default MarketListUI;
