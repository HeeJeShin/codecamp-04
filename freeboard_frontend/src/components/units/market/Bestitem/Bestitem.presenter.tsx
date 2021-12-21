import { getDate } from "../../../../commons/libraries/utils"
import * as S from "./Bestitem.styles"
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { IBestItemUIProps } from "./Bestitem.typers";
import { IUseditem } from "../../../../commons/types/generated/types";


//card 이미지 받아온느법.
// const BestImg = {
//     0: "./images/벽조명.jpg",
//     1: "./images/카페인테리어.jpg",
//     2: "/images/원목조리기구.png",
//     3: "/images/책위조명.jpg",
//   };

const BestItemUI = (props: IBestItemUIProps) => {

    return(
        <S.Wrapper>
            <S.Title>BEST ITEM</S.Title>
            <S.Wrapper_Card >
                {props.data?.fetchUseditemsOfTheBest.map((el: IUseditem) => (
                    <S.BestCard hoverable
                    cover={
                      // <img
                      //   alt="example"
                      //   src={BestImg[index]}
                      //   // src="./images/펭수카톡.jpg"
                      // />
                      <S.myimg
                        alt="example"
                        src={`https://storage.googleapis.com/${el.images}`}
                        onError={props.onError}
                        onClick={props.onClickMoveToMarketDetail}
                      />
                    }
                    
                  >
                    <Meta
                      title={el.name}
                      description={
                        <div>
                         
                          <span>{el.seller?.name}<br /><br /></span>
                          {/* <span>{el.contents}</span> */}
                          <span>{getDate(el.createdAt)}<br /><br /></span>
                          <span>{el.price}원</span>
                        </div>
                      }
                    />

                    </S.BestCard>
                ))}

            </S.Wrapper_Card>

        </S.Wrapper>

    )
}

export default BestItemUI