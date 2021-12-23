import { gql } from "@apollo/client";

export const CREATE_USED_ITEM_QUESTION_ANSWER = gql`
 mutation createUseditemQuestionAnswer($createUseditemQuestionAnswerInput:CreateUseditemQuestionAnswerInput!, $useditemQuestionId:ID!){
    createUseditemQuestionAnswer(createUseditemQuestionAnswer:$createUseditemQuestionAnswer, useditemQuestionId:$useditemQuestionId){
        _id
        contents
        user{
            email
            name
            picture
        }
    }
 }

`;

export const  UPDATE_USED_ITEM_QUESTION_ANSWER = gql`
    mutation updateUseditemQuestionAnswer($updateUseditemQuestionAnswerInput:UpdateUseditemQuestionAnswerInput!, useditemQuestionAnswerId: ID!){
        updateUseditemQuestionAnswer(updateUseditemQuestionAnswerInput:$updateUseditemQuestionAnswerInput, useditemQuestionAnswerId:$useditemQuestionAnswerId){
            _id
            contents
            user{
                name
                picture
            }

        }
    }
`;