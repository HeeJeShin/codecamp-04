
import * as S from "./QuestionsList.styles"
import {  useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import { IMutation, IMutationDeleteUseditemQuestionArgs, IMutationUpdateUseditemQuestionArgs } from "../../../../../commons/types/generated/types";
import { DELETE_USED_ITEM_QUESTION, UPDATE_USED_ITEM_QUESTION } from "./QuestionsList.queries";




const QuestionListPresenterItem = (props: any) => {
  const [updateContents, setUpdateContents] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const [updateQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USED_ITEM_QUESTION);
  const [deleteQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USED_ITEM_QUESTION);

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdateContents(event.target.value);
  };

  const onClickUpdate = () => setIsEdit(true);

  const onClickUpdateQuestion = async () => {
    try {
      await updateQuestion({
        variables: {
          useditemQuestionId: props.el._id,
          updateUseditemQuestionInput: { contents: updateContents },
        },
      });
      Modal.success({ content: "수정 완료" });
      setIsEdit(false);
      props.refetch();
    } catch (error) {
      error instanceof Error && Modal.error({ content: error.message });
      setIsEdit(false);
    }
  };

  const onClickDeleteQuestion = (id: string) => async () => {
    try {
      await deleteQuestion({ variables: { useditemQuestionId: id } });
      Modal.success({ content: "삭제완료" });
      props.refetch();
    } catch (error) {
      error instanceof Error && Modal.error({ content: error.message });
    }
  };

  return (
    <S.Wrapper>
      
      {isEdit ? (
       <S.ItemWrapper>
         <S.FlexWrapper>


       <S.Avatar id="Abatar_Icon" /> 
       <S.UserWrapper>

          <S.Username>{props.el.user.name}</S.Username> <br />
       </S.UserWrapper>
         </S.FlexWrapper>
          <S.Comment_Contents
            type="text"
            defaultValue={props.el.contents}
            onChange={onChangeContents}
          />
          <S.Comment_Contents_Button onClick={onClickUpdateQuestion}>수정하기</S.Comment_Contents_Button>
        </S.ItemWrapper>
      ) : (
        <S.Comment_InputWrapper_Contents>
          {/* <h2>{props.el._id}</h2> */}
          <S.FlexWrapper>
            <S.Avatar id="Abatar_Icon" />           
            <S.Username>{props.el.user.name}</S.Username>
            <S.UpdateIcon onClick={onClickUpdate}>수정하기</S.UpdateIcon>
            <S.DeleteIcon onClick={onClickDeleteQuestion(props.el._id)}>삭제</S.DeleteIcon>
          </S.FlexWrapper>  
          <S.Contents>{props.el.contents}</S.Contents>
        
        </S.Comment_InputWrapper_Contents>
      )}
    </S.Wrapper>
  );
};

export default QuestionListPresenterItem;