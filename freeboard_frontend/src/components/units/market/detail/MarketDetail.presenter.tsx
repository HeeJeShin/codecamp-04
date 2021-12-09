import KakaoMapPage from "../../../../commons/map/KakaoMap";
import * as S from "./MarketDetail.styles";

const MarketDetailUI = (props) => {
  return (
    <>
      <div>상품명: {props.name}</div>
      <div>한줄: {props.remarks}</div>
      <div>내용: {props.contents}</div>
      <div>가격: {props.price}</div>
      <KakaoMapPage/>
      <button onClick={props.update}>수정</button>
      <button onClick={props.list}>목록</button>
      <button onClick={props.onClickMoveBuy}>구매</button>
    </>
  );
};

export default MarketDetailUI;
