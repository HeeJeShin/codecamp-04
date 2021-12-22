import * as S from "./MarketWrite.styles";
import { IMarketWriteUIProps } from "./MarketWrite.types";
//import Button01 from "../../../../commons/button/Button01"
import { v4 as uuidv4 } from "uuid";
import Uploads01 from "../../../commones/uploads/01/Uploads01.container";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import KakaoMapZipcodePage from "../../../../commons/map/KakaoMapZipcode";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function MarketWriteUI(props) {
  // const { handelSubmit, register, setValue, trigger } = useForm({
  //   mode: "onChange",
  // });

  // function handleChange(value: string) {
  //   console.log(value);
  //   setValue("contents", value === "<p><br></p>" ? "" : value);

  //   trigger("contents");
  // }
  return (
    <>
      {props.isModalVisible && (
        <Modal
          visible={true}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
        >
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
      <S.Wrapper>
        <S.Title>상품{props.isEdit ? "수정하기" : "등록하기"}</S.Title>
        <S.Wrapper_MyUseditem>
          <S.MyLabel>상품</S.MyLabel>
          <S.MyUseditem
            type="text"
            placeholder="상품명을 작성해주세요"
            onChange={props.onChangeMyName}
            defaultValue={props.dataFetchItem?.fetchUseditem.name}
          />
          {/* <Error>{props.myWriterError}</Error> */}
        </S.Wrapper_MyUseditem>
        <S.Wrapper_MyRemarks>
          <S.MyLabel>한줄요약</S.MyLabel>
          <S.MyRemarks
            type="text"
            placeholder="상품을 간략하게 설명해주세요"
            onChange={props.onChangeMyRemarks}
            defaultValue={props.dataFetchItem?.fetchUseditem.remarks}
          />
        </S.Wrapper_MyRemarks>

        <S.Wrapper_MyContents>
          <S.MyLabel>상품설명</S.MyLabel>
       
          {process.browser && <ReactQuill onChange={props.handleChange}/>}
          {/* {process.browser && <S.MyContents  onChange={handleChange} />}  */}

          {/* <textarea
          placeholder="상품을 설명해주세요"
          onChange={props.onChangeMyContents}
          defaultValue={props.data?.fetchUseditem?.contents}
        ></textarea> */}
        </S.Wrapper_MyContents>

        <S.Wrapper_MyPrice>
          <S.MyLabel>판매 가격</S.MyLabel>
          <S.MyPrice
            type="number"
            placeholder="판매가격을 입력해주세요."
            name="price"
            onChange={props.onChangeMyPrice}
            defaultValue={Number(props.dataFetchItem?.fetchUseditem.price)}
          />
        </S.Wrapper_MyPrice>

        {/* <S.Wrapper_MyTags>
        <S.MyLabel>태그입력</S.MyLabel>
        <S.MyTag
          type="text"
          placeholder="#태그 #태그 # 태그"
          defaultValue={props.data?.fetchUseditem?.tag}
          
        />
        </S.Wrapper_MyTags> */}

        <S.Wrapper_MyLocation>
          <S.Wrapper_MyMap>
            {/* <S.MyMap id="map">

            </S.MyMap> */}
            {/* <KakaoMapZipcodePage /> */}
          </S.Wrapper_MyMap>

          <S.Wrapper_MyPlace>
            <S.MyLabel>주소</S.MyLabel>
            <S.Wrapper_MyZipcode>
              <S.MyZipcode
                placeholder="07250"
                readOnly
                value={
                  props.zipcode ||
                  props.dataFetchItem?.fetchUseditem.useditemAddress.zipcode ||
                  ""
                }
              />

              <S.SearchButton
                type="button"
                onClick={() => props.setIsModalVisible(true)}
              >
                우편번호 검색
              </S.SearchButton>
              <S.MyAddress
                readOnly
                value={
                  props.address ||
                  props.dataFetchItem?.fetchUseditem?.useditemAddress?.address ||
                  ""
                }
              />
              <S.MyAddress
                onChange={props.onChangeAddressDetail}
                defaultValue={
                  props.dataFetchItem?.fetchUseditem?.useditemAddress?.addressDetail ||
                  ""
                }
              />
            </S.Wrapper_MyZipcode>
          </S.Wrapper_MyPlace>
        </S.Wrapper_MyLocation>

        <S.Wrapper_MyImage>
          <S.MyLabel>사진</S.MyLabel>
          {props.fileUrls.map((el, index) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              defaultFileUrl={props.data?.fetchUseditem.images?.[index]}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </S.Wrapper_MyImage>

        <S.Wrapper_MyOption>
          <S.MyLabel>나타낼 사진</S.MyLabel>
          <S.MyRadio_Buttoon type="radio" id="youtube" name="radio-button" />
          <S.MyYoutube htmlFor="youtube">유튜브</S.MyYoutube>
          <S.MyImage type="radio" id="image" name="radio-button" />
          <S.MyLabel htmlFor="image">사진</S.MyLabel>
        </S.Wrapper_MyOption>

        <S.Wrapper_Mybutton>
          {props.isEdit && (
            <S.Mybutton onClick={props.onClickUpdate}>수정하기</S.Mybutton>
          )}
          {!props.isEdit && (
            <S.Mybutton onClick={props.onClickSubmit}>등록하기</S.Mybutton>
          )}
        </S.Wrapper_Mybutton>
      </S.Wrapper>
    </>
  );
}
