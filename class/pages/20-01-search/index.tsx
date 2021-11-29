import { gql, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { IQuery,  IQueryFetchBoardsArgs } from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
    query fetchBoards($search: String){
        fetchBoards(search: $search){
            _id
            writer
            title
            createdAt
        }
    }
`;

export default function SearchPage(){
    const[mySuearch, setMySearch] = useState("");
    const {data, refetch} =  useQuery<Pick<IQuery,'fetchBoards'>, IQueryFetchBoardsArgs>(
        FETCH_BOARDS
        );

    function onChangeSearch(event: ChangeEvent<HTMLInputElement>){
        setMySearch(event.target.value)
    }

    function onClickSearch(){
        // mySearch 키워드로 fetchBoard 요청하기!!
        refetch({ search: mySuearch })
    }
    return(
        <>
            <h1>검색페이지!!!</h1>
            검색어입력:<input type="text" onChange={onChangeSearch}/>
            <button onClick={onClickSearch}>검색</button>
            {data?.fetchBoards.map((el) => (
                <div key={el._id}>
                    <span style={{ paddingRight: "50px"}} >{el.writer}</span>
                    <span style={{ paddingRight: "50px"}} >{el.title}</span>
                    <span style={{ paddingRight: "50px"}} >{el.createdAt}</span>
                </div>
            ))}
        </>

    );
}