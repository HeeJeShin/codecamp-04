import { IUseditemQuestion } from "../../../../../commons/types/generated/types";


export interface IQuestionsListUIProps{
    onLodeMore: (page: number) => void;
    data: any;

}

export interface IQuestionsListUIItemProps{
    el: IUseditemQuestion;
    
}