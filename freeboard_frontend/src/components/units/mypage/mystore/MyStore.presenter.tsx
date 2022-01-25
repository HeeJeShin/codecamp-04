import { IUseditem } from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEMS_BOUGHT } from "../MyPage.queries";
import * as S from "./Mystore.styles";
import { IMyStoreProps } from "./MyStore.types";

import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../commons/libraries/utils";
const MyStoreUI = (props: IMyStoreProps) => {
  return (
    <>
      <S.Wrapper>
        <S.Title>내가 구입한 내역입니다.</S.Title>
        <S.TableTop />
        {props.buyData?.fetchUseditemsIBought?.map(
          (el: IUseditem, index: number) => (
            <S.Row key={el._id}>
              <S.ColumnBasic>{index + 1}</S.ColumnBasic>
              <S.ColumnTitle id={el._id}>
                {el.name
                  .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                  .split("@#$%")
                  .map((el: String) => (
                    <S.TextToken
                      key={uuidv4()}
                      isMatched={props.keyword === el}
                    >
                      {el}
                    </S.TextToken>
                  ))}
              </S.ColumnTitle>
              <S.ColumnBasic>{el.price}</S.ColumnBasic>
              <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
            </S.Row>
          )
        )}
      </S.Wrapper>
    </>
  );
};

export default MyStoreUI;
