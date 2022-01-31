import KakaoMapPage from "../../../../commons/map/KakaoMap";
import * as S from "./MarketDetail.styles";

import Dompurify from "dompurify";
import { IMarketdetailProps } from "./MarketDetail.types";
import BestItem from "../Bestitem/BestItem.container";

const MarketDetailUI = (props: IMarketdetailProps) => {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Body>
          <S.Title>{props.data?.fetchUseditem.name}</S.Title>
          <S.Remark>{props.data?.fetchUseditem.remarks}</S.Remark>
          <S.Linebar />

          <S.ContentsWrapper>
            <S.ImageWrapper>
              {props.data?.fetchUseditem.images
                ?.filter((el: string) => el)
                .map((el: string) => (
                  <S.Img
                    key={el}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                ))}
            </S.ImageWrapper>

            <S.Contents>{props.data?.fetchUseditem.contents}</S.Contents>
          </S.ContentsWrapper>
        </S.Body>

        <S.MapWrapper>
          {/* 주소옮기기 */}
          <div id="map" style={{ width: "500px", height: "400px" }}></div>
          <div>
            {props.data?.fetchUseditem.useditemAddress?.zipcode} <br />
            {props.data?.fetchUseditem.useditemAddress?.address}
            {props.data?.fetchUseditem.useditemAddress?.addressDetail}
          </div>
        </S.MapWrapper>
        <S.PriceWrapper>
          <S.Price>{props.data?.fetchUseditem.price}원</S.Price>
          <S.AvatarWrapper>
            {/* <S.Avatar /> */}
            <S.Info>
              <S.Writer>
                판매자 :{props.data?.fetchUseditem.seller.name}
              </S.Writer>
              <S.CreatedAt>{props.data?.fetchUseditem.createdAt}</S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
        </S.PriceWrapper>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.MyBtn type="primary" block onClick={props.onClickMoveBuy}>
          구매
        </S.MyBtn>
        <S.MyBtn type="link" block onClick={props.onClickWishList}>
          찜하기
        </S.MyBtn>
        <S.MyBtn block onClick={props.list}>
          목록으로
        </S.MyBtn>
        <S.MyBtn type="dashed" block onClick={props.update}>
          수정
        </S.MyBtn>
        <S.MyBtn type="dashed" block onClick={props.onClickDelete}>
          삭제하기
        </S.MyBtn>
      </S.BottomWrapper>
    </S.Wrapper>
  );
};

export default MarketDetailUI;
