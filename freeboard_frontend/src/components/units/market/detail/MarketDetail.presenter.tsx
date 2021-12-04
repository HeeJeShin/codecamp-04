import * as S from "./MarketDetail.styles";

const MarketDetailUI = (props) => {
  return (
    <>
      <div>상품명: {props.name}</div>
      <div>한줄: {props.remarks}</div>
      <div>내용: {props.contents}</div>
      <div>가격: {props.price}</div>
      <div>asdf</div>
      <button onClick={props.update}>수정</button>
      <button onClick={props.list}>목록</button>
    </>
  );
};

export default MarketDetailUI;
