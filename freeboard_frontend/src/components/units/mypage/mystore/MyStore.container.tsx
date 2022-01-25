import { useQuery } from "@apollo/client";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEMS_BOUGHT } from "../MyPage.queries";
import MyStoreUI from "./MyStore.presenter";

const MyStoreContainer = () => {
  const [startPage, setStartPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const { data: buyData } = useQuery<
    Pick<IQuery, "fetchUseditemsIBought">,
    IQueryFetchUseditemsIBoughtArgs
  >(FETCH_USED_ITEMS_BOUGHT, { variables: { page: startPage } });

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };
  return (
    <MyStoreUI
      buyData={buyData}
      startPage={startPage}
      setStartPage={setStartPage}
      onChangeKeyword={onChangeKeyword}
    />
  );
};

export default MyStoreContainer;
