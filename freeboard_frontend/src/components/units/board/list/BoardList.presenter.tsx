import React from "react";
import { getDate } from "../../../../commons/libraries/utils";
import {
  Wrapper, 
  Input_Wrapper,
  Search_Input,
  Search_Yydd,
  TableTop,
  TableBottom,
  Row_TiTle,
  Row,
  ColumnHeaderBasic,
  ColumnHeaderTitle,
  ColumnBasic,
  ColumnTitle,
  Footer,
  //PencilIcon,
  MyButton,
  MyPrev,
  MyNext
  
} from "./BoardList.styles";
import { BoardListUIProps } from "./BoardList.types";
import { Card } from 'antd';

export default function BoardListUI(props:BoardListUIProps) {

  

  return (
    <Wrapper>
       <Input_Wrapper>
          <Search_Input  type="serach" placeholder="제목을 검색해주세요."> 
          </Search_Input>
          <Search_Yydd type="month">
          </Search_Yydd>
       </Input_Wrapper>     
      
      <TableTop />
      <Row_TiTle>
        <ColumnHeaderBasic>번호</ColumnHeaderBasic>
        <ColumnHeaderTitle>제목</ColumnHeaderTitle>
        <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
        <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
      </Row_TiTle>
      
      {props.data?.fetchBoards.map((el:any, index:number) => (
        <Row key={el._id}>
          <ColumnBasic>{index + 1}</ColumnBasic>
          <ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>{el.title}</ColumnTitle>
          <ColumnBasic>{el.writer}</ColumnBasic>
          <ColumnBasic>{getDate(el.createdAt)}</ColumnBasic>
        </Row>
      ))}
      <TableBottom />
      <Footer>
            <MyPrev onClick={props.onClickPrevPage}>이전페이지</MyPrev>
            {new Array(10).fill(1).map(
                (_, index) =>props.startPage + index <= props.lastPage && ( 
                
                <span key={props.startPage + index} 
                onClick={props.onClickPage} 
                id={String(index)}
                style={{ margin: "10px", cursor: "pointer" }}
                > 
                {props.startPage + index}
                </span>
            )) }
            <MyNext onClick={props.onClickNextPage}>다음페이지</MyNext>
        <MyButton  onClick={props.onClickMoveToBoardNew}>
          
          게시물 등록하기
        </MyButton>
      </Footer>
    </Wrapper>
  );
}