import {gql} from "@apollo/client"

export const UPADTE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation updateUseditemQuestionAnswer(
    $useditemQuestionAnswerId: ID!
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
  ) {
    updateUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
      updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
    ) {
      _id
      contents
    }
  }
`;



export const DELETE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`;

export const FETCH_USED_ITEM_QUESTION_ANSWERS =gql`
    query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!){
        fetchUseditemQuestionAnswers(page:$page, useditemQuestionId:$useditemQuestionId){
            _id
            contents
            user{
                name
                picture
            }
        }
    }
`