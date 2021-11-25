import { ChangeEvent } from "react";

export interface IBoardListProps{
    isEdit: boolean;   
    data1: any;
    index:  number
    
  }

  export interface BoardListUIProps {
    data: any
    onClickMoveToBoardNew: any
    onClickMoveToBoardDetail: any
    onClickNextPage: any
    onClickPrevPage: any
    startPage: any
    onClickPage: any
    lastPage: any
  }

