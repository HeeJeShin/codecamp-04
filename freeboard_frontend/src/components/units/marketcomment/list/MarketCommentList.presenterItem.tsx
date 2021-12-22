import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import MarketCommentWrite from "../write/MarketCommentWrite.Container";
import { DELETE_USED_ITEM_QUESTION, FETCH_USED_ITEM_QUESTIONS } from "./MarketCommentList.queries";
import * as S from "./MarketCommentList.styles";
import { IMarketCommentListUIItemProps } from "./MarketCommentList.types";

const MarketCommentListUIItem = (props: IMarketCommentListUIItemProps) => {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_USED_ITEM_QUESTION);

  function onClickUpdate() {
    setIsEdit(true);
  }

  async function onClickDelete() {
      try {
          await deleteUseditemQuestion({
              variables:{
                useditemQuestionId: props.el?._id,
              },
              refetchQueries:[
                  {
                      query: FETCH_USED_ITEM_QUESTIONS,
                      variables: {useditemId: router.query.usdeitemId},
                  },
              ],
          });
      } catch(error: unknown){
          if(error instanceof Error) alert(error.message);
      }
  }

  return (
      
      <S.Wrapper>
          {!isEdit && (
              <S.ItemWrapper>
                  <S.FlexWrapper>
                      <S.Avatar id="Abatar_Icon" />
                      {/* <S.Avatar>{props.el?.user.picture}</S.Avatar> */}

                        <S.MainWrapper>
                            <S.UserWrapper>
                                <S.Username>{props?.el?.user.name}</S.Username>
                                <S.Star disabled value={props.el?.rating} />
                            </S.UserWrapper>
                            <S.Contents>{props.el?.contents}</S.Contents>
                        </S.MainWrapper>
                        <S.OptionWrapper>
              <S.UpdateIcon id="Update_Icon" onClick={onClickUpdate} />
              <S.DeleteIcon id="Delete_Icon" onClick={onClickDelete} />
            </S.OptionWrapper>

                  </S.FlexWrapper>
                  <S.DateString>{props.el?.createdAt}</S.DateString>
              </S.ItemWrapper>
          )}
          {isEdit && (
              <MarketCommentWrite
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              el={props.el}
              />
          )}
      </S.Wrapper>
  )
};
export default MarketCommentListUIItem;
