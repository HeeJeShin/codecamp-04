// import { IconButtonProps } from "@material-ui/core";
import * as S from "./MarketList.styles";
import { IMarketListUIProps } from "./MarketList.types";

import InfinitieScroll from "react-infinite-scroller";
import MediaCard from "../../../../commons/card/Card02";

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

const MarketListUI = (props: IMarketListUIProps) => {
  return (
    <S.Wrapper>
      <S.Wrapper_Mybutton>
        <S.Mybutton id="/market/new" onClick={props.onClickMove}>
          상품등록
        </S.Mybutton>
      </S.Wrapper_Mybutton>

      <S.Wrapper_Infini>
        <InfinitieScroll pageStart={0} loadMore={props.loadMore} hasMore={true}>
          <S.testing>
            {props.data?.fetchUseditems.map((el: any, index: any) => (
              <S.Wrapper_Card>
                <MediaCard
                  el={el}
                  onBasket={props.onClickBasket(el)}
                  onDetail={props.onClickMoveToMarketDetail}
                  id={el._id}
                />
                {/* <button
                  id={el._id}
                  onClick={props.onClickMoveToMarketDetail}
                  key={el._id}
                >
                  상세
                </button> */}

              
              </S.Wrapper_Card>
            ))}
          </S.testing>
        </InfinitieScroll>
      </S.Wrapper_Infini>
    </S.Wrapper>
  );
};
export default MarketListUI;

