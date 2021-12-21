import KakaoMapPage from "../../../../commons/map/KakaoMap";
import * as S from "./MarketDetail.styles";
import { Button } from 'antd';
import Dompurify from "dompurify";

const MarketDetailUI = (props) => {
  return (
    <S.Wrapper>
      <div>상품명: {props.data?.fetchUseditem.name}</div>
      <div>한줄: {props.data?.fetchUseditem.remarks}</div>
      {/* <div>내용: {props.contents}</div> */}
     내용: {process.browser && (
      <div
        dangerouslySetInnerHTML={{
          __html: Dompurify.sanitize(String(props.data?.fetchUseditem?.contents)),
        }}
      />
    )}
      <div>가격: {props.data?.fetchUseditem.price}</div>
      <div>이미지: 
      {props.data?.fetchUseditem.images
          ?.filter((el: string) => el)
          .map((el: string) => (
            <img key={el} src={`https://storage.googleapis.com/${el}`} />
          ))}
      </div>

      {/* 주소옮기기 */}
      <div id="map" style={{ width: "500px", height: "400px" }}></div>

        <div>
          {props.data?.fetchUseditem.useditemAddress?.zipcode} <br />
          {props.data?.fetchUseditem.useditemAddress?.address}
          {props.data?.fetchUseditem.useditemAddress?.addressDetail}
        </div>
  
      
    
    <Button type="primary" block onClick={props.onClickMoveBuy}>
    구매
    </Button>   
    <Button type="link" block onClick={props.onClickWishList}>
      찜하기
    </Button>

    <Button block onClick={props.list}>목록으로</Button>

    <Button type="dashed" block onClick={props.update}>
      수정
    </Button>
    <Button type="dashed" block onClick={props.onClickDelete}>
      삭제하기
    </Button>
    </S.Wrapper>
  );
};

export default MarketDetailUI;
