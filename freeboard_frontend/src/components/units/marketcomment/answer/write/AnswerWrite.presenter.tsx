import AnswerListItem from "../list/AnswerList.presenterItem";
import { IAnswerListUIProps } from "../list/AnswerList.types";
import * as S from "./AnswerWrite.styles";

const AnswerWriteUI = (props: IAnswerListUIProps) => {
  return (
    <S.Wrapper>
      {!props.isEdit && (
        <S.Comment_Header>
          <S.MyIcon id="Comment_Icon" />
          <span>댓글</span>
        </S.Comment_Header>
      )}
      <S.Comment_InputWrapper_Contents>
        <S.Comment_Contents
          maxLength={100} //100글자까지만 입력하게 해주는기능
          defaultValue={props.el?.contents}
          onChange={props.onChangeContents}
          placeholder="답글을 등록해주세요."
        />

        <S.Comment_Contents_Footer>
          <S.Comment_Contents_Typing_Count>
            {props.Contents.length}/100
          </S.Comment_Contents_Typing_Count>
          <S.Comment_Contents_Button
            onClick={props.onClickWrite}
          >
            등록하기
          </S.Comment_Contents_Button>
        </S.Comment_Contents_Footer>
      </S.Comment_InputWrapper_Contents>
      {props.data?.fetchUseditemQuestionAnswers.map((el) => (
        <AnswerListItem key={el._id} el={el} refetch={refetch} />
      ))}
    </S.Wrapper>
  );
};
export default AnswerWriteUI;
