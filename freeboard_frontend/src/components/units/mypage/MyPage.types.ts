import { ApolloQueryResult } from "@apollo/client";
import { IQuery, IQueryFetchUseditemsIBoughtArgs } from "../../../commons/types/generated/types";


export interface IMypageUIProps {
    buyData: any;
    keyword: any;
    onChangeKeyword: any;
    refetch: (
        variables: Partial<IQueryFetchUseditemsIBoughtArgs>
      ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsIBought">>>;

    data: any;
    onClickPayment: any;
    startPage: any;
    setStartPage: any;
}