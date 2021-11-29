import {gql, useQuery} from '@apollo/client'
import { ChangeEvent, MouseEvent, useState } from 'react'; "react"
import { IQuery, IQueryFetchBoardArgs } from '../../src/commons/types/generated/types';
import _ from 'lodash';
import { v4 as uuidv4 } from "uuid";
import styled from '@emotion/styled';


const MyWord = styled.div`

`;

const FETCH_BOARDS = gql`
query fetchBoards($page: Int, $search: String){
    fetchBoards(search: $search, page: $page){
    _id
    writer
    title
    createdAt
    }
  }
`;

interface IProms{
    isMatched: boolean;
}


export default function SearchKeywordPage(){
 const [myKeyword, seyMyKeyword] = useState("");
 const {data ,refetch} =  useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardArgs
    >(FETCH_BOARDS);

 const getDebounce = _,debounce((data) => {
     refetch({ search: data, page: 1});
     setMykeyword(data);
 }, 500);

 function onChangeSearch(event: ChangeEvent<HTMLInputElement>){
     getDebounce(event?.target.value);
 }

 function onClickPage(event){
     if (event.target instanceof Element)
        refetch({search: myKeyword, page: Number(event.target.id)})
 };

    return(
        <>
        <h1>검색페이지</h1>
        검색어입력: <input type="text" onChange={onChangeSearch}/>
        {data?.fetchBoards.map((el) => (
        <div key={el._id}>
            <span>{el.writer}</span>
            <span>{el.title
                .replaceAll(myKeyword, `@#$${myKeyword}@#$`)
                .split("@#$")
                .map((el) => (
                    <MyWord key={uuidv4()} isMatched={myKeyword ===el}>
                        {el}
                    </MyWord>
                ))}</span>           
            <span>{el.createdAt}</span>
        </div>
        {new Array(10).fill(1).map((_, index) => (
            <span key={uuidv4()} onClick={onClickPage} id={String(index + 1)}>
                {index + 1}
            </span>
        ))})}

        </>
    );
}