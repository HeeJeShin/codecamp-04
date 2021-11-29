import { ChangeEvent } from "react";
import BoardSearchUI from "./BoardSearch.presenter";
import { IBoardSearchProps } from "./BoardSearch.types";
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