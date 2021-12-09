import { IconButtonProps } from "@material-ui/core";
import * as S from "./MarketList.styles";
import { ExpandMoreProps } from "./MarketList.types";
import RecipeReviewCard from "../../../../commons/card/Card01";
import InfinitieScroll from "react-infinite-scroller";

// interface ExpandMoreProps {
//   //onClickMoveToMarkDetail: MouseEventHandler<HTMLDivElement> | undefined;
//   data: any;
//   onClickMove: any;
//   loadMore: () => void;
//   el: any;
//   expand: boolean;
//   title: string;
//   subheader: Date;
//   seller: any;
//   name: string;
//   Contents: string;
//   createdAt: any;
//   onClickMoveToMarketDetail: any;
// }

const MarketListUI = (props: ExpandMoreProps) => {
  return (
    <S.Wrapper>
      <S.Wrapper_Mybutton>
        <S.Mybutton id="/market/new" onClick={props.onClickMove}>
          상품등록
        </S.Mybutton>
      </S.Wrapper_Mybutton>

      <S.Wrapper_Infini>
        <InfinitieScroll
          pageStart={0}
          loadMore={props.loadMore}
          hasMore={true}
          useWindow={false}
        >
          <S.testing>
            {props.data?.fetchUseditems.map((el: any, index: any) => (
              <S.Wrapper_Card>
                <RecipeReviewCard el={el} />
                <button
                  id={el._id}
                  onClick={props.onClickMoveToMarketDetail}
                  key={el._id}
                >
                  버튼
                </button>
                {/* //onClick={props.onClickMoveToMarketDetail} */}
                {/* id={`market/${el._id}`} */}
                {/* id="market/${id}" */}
              </S.Wrapper_Card>
            ))}
          </S.testing>
        </InfinitieScroll>
      </S.Wrapper_Infini>
    </S.Wrapper>
  );
};
export default MarketListUI;
