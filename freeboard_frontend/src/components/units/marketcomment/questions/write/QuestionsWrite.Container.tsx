import { useMutation } from "@apollo/client";
import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react";
import { IMutation, IMutationCreateUseditemQuestionArgs } from "../../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTIONS } from "../list/QuestionsList.queries";
import QuestionsWriteUI from "./QuestionsWrite.Presenter";
import { CREATE_USED_ITEM_QUESTION, UPDATE_USED_ITEM_QUESTION } from "./QuestionsWrite.Queries";
import { IQuestionsWriteProps } from "./QuestionsWrite.Types";


const QuestionsWrite = (props: IQuestionsWriteProps) =>{
    const router = useRouter();
    
    // const [value, setValue] = useState(3);
    const [createUseditemQuestion] = useMutation<Pick<IMutation,"createUseditemQuestion">,IMutationCreateUseditemQuestionArgs>(CREATE_USED_ITEM_QUESTION)
    const [updateUseditemQuestion] = useMutation<Pick<IMutation, "updateUseditemQuestion">>(UPDATE_USED_ITEM_QUESTION)
   
    const [Contents, setContents] = useState("");
  

    function onChangeContents(event: ChangeEvent<HTMLInputElement>){
        setContents(event.target.value);
    }

    // function handleChange(value: number){
    //     setValue(value);
    // }

    async function onClickWrite(){
        try{
            const result = await createUseditemQuestion({
                variables: {
                    createUseditemQuestionInput:{
                        contents: Contents,                        
                    },
                    useditemId: String(router.query.useditemId),
                },
                refetchQueries: [
                    {
                      query: FETCH_USED_ITEM_QUESTIONS,
                        variables: {useditemId: router.query.useditemId},
                
                    },
                ],
            })
            console.log(result)
            location.reload()
        }catch (error: unknown){
            if(error instanceof Error) alert(error.message);
        }
    }

    async function onClickUpdate(){
        if(!Contents){
            alert("수정된 내용이업습니다.");
            return;
        }        
   
    try {
        if(!props.el?._id)return;
        await updateUseditemQuestion({
            variables: {
                updateUseditemQuestionInput:{ contents: Contents},
                useditemId: props.el?._id,
            },
            refetchQueries: [
                {
                    query: FETCH_USED_ITEM_QUESTIONS,
                    variables: {useditemId: router.query.useditemId},
                },
            ],
        });
        props.setIsEdit?.(false);
    } catch (error : unknown){
        if(error instanceof Error) alert(error.message);
    }
   }

    return<QuestionsWriteUI 
        el={props.el}
        isEdit={props.isEdit}
        // value={value}
        Contents={Contents}
        onChangeContents={onChangeContents}
        // handleChange={handleChange}
        onClickWrite={onClickWrite}
        onClickUpdate={onClickUpdate}
    
    /> 
}
export default QuestionsWrite