import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent, ChangeEventHandler } from "react";
import {
  IQuery,
  IQueryFetchBoardsCountArgs,
  IQueryFetchUseditemsIBoughtArgs,
} from "../../../../commons/types/generated/types";

export interface IMypageSearchUIProps {
  onChangeSearchbar: ChangeEventHandler<HTMLInputElement> | undefined;
}
