import { ApolloQueryResult } from "@apollo/client";
import {Dispatch, MouseEvent, SetStateAction} from "react"
import { 
  IQuery, 

  IQueryFetchBoardsArgs, 
  IQueryFetchBoardsCountArgs 
} from "../../../../commons/types/generated/types";


export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveToBoardNew: () => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards" >>>;
  refetchBoardsCount: (
    variables: Partial<IQueryFetchBoardsCountArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  count?: number;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  keyword: string;
  onChangeKeyword: (value: string) => void;
  // isMatched: boolean; // 이거나중에 뺴자. 
  onClickPrevPage: any; // 애니는 페이지 네이션인거같음.. 
  lastPage: any;
  onClickPage: any;
  onClickNextPage: any 
}

export interface ITextTokenProps {
  isMatched: boolean;
}

