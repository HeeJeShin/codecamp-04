import { Dispatch, SetStateAction } from "react";
import { IBoardComment,  IUseditemQuestion } from "../../../../../commons/types/generated/types";

export interface IQuestionsWriteProps{
    isEdit?: boolean;
    el?: IBoardComment;
    setIsEdit?: Dispatch<SetStateAction<boolean>>;
    

}

export interface IQuestionsWritePropsUIProps{
    value: number | undefined;
    handleChange: ((value: number) => void) | undefined;
    Contents: any;
    isEdit: any;
    onClickWrite: any;
    onClickUpdate: any;
    el: IUseditemQuestion;
    onChangeContents: any;
    
}

// export interface IQuestionsWritePropsUIItemProps{
//     el: IUseditemQuestion
// }