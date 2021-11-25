import * as S from "./BoardCommentWrite.styles";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";
import { Rate } from 'antd';
import { useState } from "react";

export default function BoardCommnetWriteUI(props: IBoardCommentWriteUIProps) {
   
  

  return (
    <S.Wrapper>
      <S.FooterWarpper>
        {!props.isEdit && (
          
            
            <S.Commnet_Header>
            <S.MyIcon id="Commnet_Icon" />
              <span>댓글</span> 
            </S.Commnet_Header>
          
        )}
        <S.Commnet_WriterWrapper>
          <S.Commnet_InputWrapper_Writer>
            <S.Commnet_Writer
              placeholder="작성자"
              readOnly={Boolean(props.el?.writer)}
              defaultValue={props.el?.writer || ""}
              onChange={props.onChangeMyWriter}
            />
            
          </S.Commnet_InputWrapper_Writer>

          <S.Commnet_InputWrapper_Password>
            <S.Commnet_Password
              type="password"
              placeholder="비밀번호"
              onChange={props.onChangeMyPassword}
            />
          </S.Commnet_InputWrapper_Password>
          <S.Star onChange={props.handleChange} value={props.value} />
        </S.Commnet_WriterWrapper>

        <S.Commnet_InputWrapper_Contents>
          <S.Commnet_Contents
            maxLength={100} //100글자까지만 입력하게 해주는기능
            defaultValue={props.el?.contents}
            onChange={props.onChangeMyContents}
            placeholder="내용을 작성개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.해주세요."
          />

          <S.Commnet_Contents_Footer>
            <S.Commnet_Contents_Typing_Count>
              {props.myContents.length}/100
            </S.Commnet_Contents_Typing_Count>
            <S.Commnet_Contents_Button
              onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
            >
              {props.isEdit ? "수정하기" : "등록하기"}
            </S.Commnet_Contents_Button>
          </S.Commnet_Contents_Footer>
        </S.Commnet_InputWrapper_Contents>
      </S.FooterWarpper>
    </S.Wrapper>
  );
}
