import { ChangeEvent } from "react";
import MypageSearchUI from "./MypageSearch.presenter";
// import { IMypageSearchUIProps } from "./MypageSearch.types";
import _ from "lodash"

export default function MypageSearch(){
    const getDebounce = _.debounce((data) => {
        props.refetch({search: data});
        // props.refetchBoardsCount({search: data});
        props.onChangeKeyword(data);
    }, 200)

    function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>){
        getDebounce(event.target.value);
    }

    return <MypageSearchUI onChangeSearchbar={onChangeSearchbar}/>;
    
}