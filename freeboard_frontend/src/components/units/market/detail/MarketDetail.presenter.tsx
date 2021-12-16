import KakaoMapPage from "../../../../commons/map/KakaoMap";
import * as S from "./MarketDetail.styles";

const MarketDetailUI = (props) => {
  return (
    <S.Wrapper>
      <div>상품명: {props.name}</div>
      <div>한줄: {props.remarks}</div>
      <div>내용: {props.contents}</div>
      <div>가격: {props.price}</div>
      {/* 주소옮기기 */}
      <div id="map" style={{ width: "500px", height: "400px" }}></div>

        <div>
          {props.data?.fetchUseditem.useditemAddress?.zipcode} <br />
          {props.data?.fetchUseditem.useditemAddress?.address}
          {props.data?.fetchUseditem.useditemAddress?.addressDetail}
        </div>
      <button onClick={props.update}>수정</button>
      <button onClick={props.list}>목록</button>
      {/* <button onClick={props.onClickBasket}>장바구니담기</button> */}
      <button onClick={props.onClickMoveBuy}>구매</button>
      
    </S.Wrapper>
  );
};

export default MarketDetailUI;
