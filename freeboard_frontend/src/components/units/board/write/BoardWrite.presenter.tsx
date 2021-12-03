import {
  Address,
  ButtonWrapper,
  Contents,
  ImageWrapper,
  InputWrapper_Writer,
  InputWrapper_Password,
  InputWrapper_Title,
  InputWrapper_Contents,
  InputWrapper,
  InputWrapper_Zipcode,
  InputWrapper_Youtobe,
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
 
  Error,


} from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import Uploads01 from "../../../commones/uploads/01/Uploads01.container";
import { v4 as uuidv4 } from "uuid";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      {props.isOpen && (
        <Modal
          visible={true}
          // onOk={props.onClickAddressSearch}
          // onCancel={props.onClickAddressSearch}
        >
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
      <Wrapper>
        <Title>게시판 {props.isEdit ? "수정" : "등록"}</Title>
        <WriterWrapper>
          <InputWrapper_Writer>
            <Label>작성자</Label>
            <Writer
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeMyWriter}
              defaultValue={props.isEdit ? props.data?.fetchBoard.writer : ""}
            />
            <Error>{props.myWriterError}</Error>
          </InputWrapper_Writer>
          <InputWrapper_Password>
            <Label>비밀번호</Label>
            <Password
              type="password"
              placeholder="비밀번호를 적어주세요."
              onChange={props.onChangeMyPassword}
            />
            <Error>{props.myPasswordError}</Error>
          </InputWrapper_Password>
        </WriterWrapper>
        <InputWrapper_Title>
          <Label>제목</Label>
          <Subject
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeMyTitle}
            defaultValue={props.isEdit ? props.data?.fetchBoard.title : ""}
          />
          <Error>{props.myTitleError}</Error>
        </InputWrapper_Title>
        <InputWrapper_Contents>
          <Label>내용</Label>
          <Contents
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeMyContents}
            defaultValue={props.isEdit ? props.data?.fetchBoard.contents : ""}
          />
          <Error>{props.myContentsError}</Error>
        </InputWrapper_Contents>
        <InputWrapper_Zipcode>
          <Label>주소</Label>
          <ZipcodeWrapper>
            <Zipcode
              placeholder="07250"
              readOnly
              value={
                props.zipcode ||
                props.data?.fetchBoard.boardAddress?.zipcode ||
                ""
              }
            />
            <SearchButton onClick={props.onClickAddressSearch}>
              우편번호 검색
            </SearchButton>
          </ZipcodeWrapper>

          <Address
            readOnly
            value={
              props.address ||
              props.data?.fetchBoard.boardAddress?.address ||
              ""
            }
          />
          <Address
            onChange={props.onChangeAddressDetail}
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail || ""
            }
          />
        </InputWrapper_Zipcode>

        <InputWrapper_Youtobe>
          <Label>유튜브</Label>
          <Youtube
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeMyYoutubeUrl}
            defaultValue={props.data?.fetchBoard.youtubeUrl}
          />
        </InputWrapper_Youtobe>
        <ImageWrapper>
          <Label>사진첨부</Label>
          {props.fileUrls.map((el, index) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              defaultFileUrl={props.data?.fetchBoard.images?.[index]}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
            {/* <>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                }}
                onClick={props.onClickMyImage}
              >
                이미지선택
              </div>

              <input
                style={{ display: "none" }}
                type="file"
                ref={props.fileRef}
                onChange={props.onChangeFile}
              />
            </> */}
          
        </ImageWrapper>
        <OptionWrapper>
          <Label>메인설정</Label>
          <RadioButton type="radio" id="youtube" name="radio-button" />
          <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
          <RadioButton type="radio" id="image" name="radio-button" />
          <RadioLabel htmlFor="image">사진</RadioLabel>
        </OptionWrapper>
        <ButtonWrapper>
          {!props.isEdit && (
            <SubmitButton
              onClick={props.onClickSubmit}
              disabled={!props.isActive}
              isActive={props.isActive}
            >
              등록하기
            </SubmitButton>
          )}
          {props.isEdit && (
            <SubmitButton onClick={props.handleEdit} isActive={props.isActive}>
              수정하기
            </SubmitButton>
          )}
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}
