import { Dispatch, SetStateAction } from "react";
import { IBoardComment,  IUseditemQuestion } from "../../../../commons/types/generated/types";

export interface IMarketCommentWriteProps{
    isEdit?: boolean;
    el?: IBoardComment;
    setIsEdit?: Dispatch<SetStateAction<boolean>>;
    

}

export interface IMarketCommentWriteUIProps{
    Contents: any;
    isEdit: any;
    onClickWrite: any;
    onClickUpdate: any;
    el: any;
    onChangeContents: any;
    
}

export interface IMarketCommentWriteUIItemProps{
    el: IUseditemQuestion
}