import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARD_COUNT } from "./BoardList.queries";
import { useRouter } from "next/router";
import { IBoardListProps } from "./BoardList.types";
import {ChangeEvent} from "react";
import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";

import { useState, MouseEvent } from 'react';


export default function BoardList(props: IBoardListProps) {
  const router = useRouter() ;
  const [startPage, setStartPage] = useState(1)

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs>
    (FETCH_BOARDS, {variables:{ page: startPage }});
    const {data: dataBoardsCount} = 
    useQuery(FETCH_BOARD_COUNT);
  const lastPage = dataBoardsCount
  ? Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
  :0;


  function onClickPage(event: MouseEvent<HTMLSpanElement>){
    if(event.target instanceof Element)
    refetch({ page: Number(event.target.id) })
}
  function onClickPrevPage(){
    if ( startPage === 1 )return;
    setStartPage((prev) => prev - 10);
  }

  function onClickNextPage(){
      if (startPage + 10 > lastPage) return;
      setStartPage((prev) => prev + 10);
  } 

  function onClickMoveToBoardNew() {
    router.push("/boards/new");
  }

  function onClickMoveToBoardDetail(event: ChangeEvent<HTMLInputElement>) {
    router.push(`/boards/${event.target.id}`);
  }

  return (
    <BoardListUI
      data={data}
      data1={dataBoardsCount}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    startPage={startPage}
    lastPage={lastPage}
    />
  );
}
