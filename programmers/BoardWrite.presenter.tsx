import {
  Address,
  ButtonWrapper,
  Contents,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
  UploadButton,
  Error,
} from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <Wrapper>
      <Title>게시판 {props.ggg ? "수정" : "등록"}</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.onChangeMyWriter}
            defaultValue={props.ggg ? props.data?.fetchBoard.writer : ""}
          />
          <Error>{props.myWriterError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password type="password" onChange={props.onChangeMyPassword} />
          <Error>{props.myPasswordError}</Error>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeMyTitle}
          defaultValue={props.ggg ? props.data?.fetchBoard.title : ""}
        />
        <Error>{props.myTitleError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeMyContents}
          defaultValue={props.ggg ? props.data?.fetchBoard.contents : ""}
        />
        <Error>{props.myContentsError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode placeholder="07250" readOnly />
          <SearchButton onClick={props.handleEdit}>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address readOnly />
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube placeholder="링크를 복사해주세요." />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        <UploadButton>
          <>+</>
          <>Upload</>
        </UploadButton>
        <UploadButton>
          <>+</>
          <>Upload</>
        </UploadButton>
        <UploadButton>
          <>+</>
          <>Upload</>
        </UploadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        {!props.ggg && (
          <SubmitButton
            onClick={props.onClickSubmit}
            disabled={!props.isActive}
            isActive={props.isActive}
          >
            등록하기
          </SubmitButton>
        )}
        {props.ggg && (
          <SubmitButton onClick={props.handleEdit} isActive={props.isActive}>
            수정하기
          </SubmitButton>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
}
