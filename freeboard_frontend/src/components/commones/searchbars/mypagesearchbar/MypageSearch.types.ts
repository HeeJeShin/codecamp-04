import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsCountArgs,
  IQueryFetchUseditemsIBoughtArgs,
} from "../../../../commons/types/generated/types";

export interface IMypageSearchUIProps {
  refetch: (
    variables: Partial<IQueryFetchUseditemsIBoughtArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsIBought">>>;
  refetchBoardsCount: (
    variables: Partial<IQueryFetchBoardsCountArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  onChangeKeyword: (value: string) => void;
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
}
