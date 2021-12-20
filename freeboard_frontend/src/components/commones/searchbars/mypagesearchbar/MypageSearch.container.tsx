import { ChangeEvent } from "react";
import BoardSearchUI from "./MypageSearch.presenter";
import { IBoardSearchProps } from "./MypageSearch.types";
import _ from "lodash"

export default function BoardSearch(props: IBoardSearchProps){
    const getDebounce = _.debounce((data) => {
        props.refetch({search: data});
        props.refetchBoardsCount({search: data});
        props.onChangeKeyword(data);
    }, 200)

    function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>){
        getDebounce(event.target.value);
    }

    return <BoardSearchUI onChangeSearchbar={onChangeSearchbar}/>;
    
}