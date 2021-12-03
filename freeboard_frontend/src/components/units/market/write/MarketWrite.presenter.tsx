import *as S  from "./MarketWrite.styles"

const MarketWriteUI = () => {


    return(
        <S.Wrapper>
            <S.Title>상품 등록하기</S.Title>
            <S.Wrapper_MyUseditem>
                <S.MyLabel>상품명</S.MyLabel>
                <S.MyUseditem 
                    type="text"
                    placeholder="상품명을 작성해주세요"
                    //onChange={onChangeMyUseditem}
                    //defaultValue={props.isEdit ? props.data?.fetchBoard.writer : ""}
                />
                {/* <Error>{props.myWriterError}</Error> */}
            </S.Wrapper_MyUseditem>
            <S.Wrapper_MyRemarks>
                <S.MyLabel>한줄요약</S.MyLabel>
                <S.MyRemarks 
                    type="text"
                    placeholder="상품명을 작성해주세요"
                />
            </S.Wrapper_MyRemarks>

            <S.Wrapper_MyContents>
                <S.MyLabel>상품설명</S.MyLabel>
                <S.MyContents
                    type="text"
                    placeholder="상품을 설명해주세요"
                />
            </S.Wrapper_MyContents>

            <S.Wrapper_MyPrice>
                <S.MyLabel>판매 가격</S.MyLabel>
                <S.MyPrice 
                    type = "text"
                    placeholder = "판매 가격을 입력해주세요"
                />
            </S.Wrapper_MyPrice>

            <S.Wrapper_MyTags>
                <S.MyLabel>태그입력</S.MyLabel>
                <S.MyTag 
                    type = "text"
                    placeholder = "#태그 #태그 # 태그"
                />    
            </S.Wrapper_MyTags>

        </S.Wrapper>
    )
}
export default MarketWriteUI