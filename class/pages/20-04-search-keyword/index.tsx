import { gql, useQuery } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import styled from "@emotion/styled";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

interface IProps {
  isMatched: boolean;
}

const MyWord = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;

export default function SearchKewordPage() {
  // const [mySearch, setMySearch] = useState("");
  const [myKeyword, setMyKeyword] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setMyKeyword(data);
  }, 500);

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
    //추가입력이 없을떄 일어나게됨.

    // refetch({ search: event.target.value})
    // // setMySearch(event.target.value);
  }

  // function onClickSearch() {
  //   // mySearch 키워드로 fetchBoard 요청하기!!
  //   refetch({ search: mySearch, page: 1 });
  //   setMyKeyword(mySearch);
  // }

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    if (event.target instanceof Element)
      refetch({ search: myKeyword, page: Number(event.target.id) });
  }

  return (
    <>
      <h1>검색페이지!!!</h1>
      검색어입력:
      <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색</button> */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ paddingRight: "50px" }}>{el.writer}</span>
          <span style={{ paddingRight: "50px" }}>
            {el.title
              .replaceAll(myKeyword, `#$%${myKeyword}#$%`)
              .split("#$%")
              .map((el) => (
                <MyWord key={uuidv4()} isMatched={myKeyword === el}>
                  {el}
                </MyWord>
              ))}
          </span>
          <span style={{ paddingRight: "50px" }}>{el.createdAt}</span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={uuidv4()} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
    </>
  );
}
