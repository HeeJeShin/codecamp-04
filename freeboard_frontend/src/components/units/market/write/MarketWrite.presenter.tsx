import *as S  from "./MarketWrite.styles"
//import Button01 from "../../../../commons/button/Button01"
const MarketWriteUI = (props) => {


    return(
        <S.Wrapper>
            <S.Title>상품 등록하기</S.Title>
            <S.Wrapper_MyUseditem>
                <S.MyLabel>상품명</S.MyLabel>
                <S.MyUseditem 
                    type="text"
                    placeholder="상품명을 작성해주세요"
                    onChange={props.myInputs}
                    defaultValue={props.data?.fetchUseditem?.name}
                />
                {/* <Error>{props.myWriterError}</Error> */}
            </S.Wrapper_MyUseditem>
            <S.Wrapper_MyRemarks>
                <S.MyLabel>한줄요약</S.MyLabel>
                <S.MyRemarks 
                    type="text"
                    placeholder="상품명을 작성해주세요"
                    onChange={props.myInputs}
                    defaultValue={props.data?.fetchUseditem?.remarks}
                />
            </S.Wrapper_MyRemarks>

            <S.Wrapper_MyContents>
                <S.MyLabel>상품설명</S.MyLabel>
                <S.MyContents
                    type="text"
                    placeholder="상품을 설명해주세요"
                    onChange={props.myInputs}
                    defaultValue={props.data?.fetchUseditem?.contents}
                />
            </S.Wrapper_MyContents>

            <S.Wrapper_MyPrice>
                <S.MyLabel>판매 가격</S.MyLabel>
                <S.MyPrice 
                    type = "number"
                    placeholder = "판매 가격을 입력해주세요"
                    onChange={props.myInputsPrice}
                    defaultValue={Number(props.data?.fetchUseditem?.price)}
                />
            </S.Wrapper_MyPrice>

            <S.Wrapper_MyTags>
                <S.MyLabel>태그입력</S.MyLabel>
                <S.MyTag 
                    type = "text"
                    placeholder = "#태그 #태그 # 태그"
                />    
            </S.Wrapper_MyTags>
            <S.Wrapper_Mybutton>
                 {props.isEdit && <S.Mybutton onClick={props.itemUpdate}>수정하기</S.Mybutton>}
                {!props.isEdit && <S.Mybutton onClick={props.itemUpload}>등록하기</S.Mybutton>}
            </S.Wrapper_Mybutton>

        </S.Wrapper>
    )
}
export default MarketWriteUI