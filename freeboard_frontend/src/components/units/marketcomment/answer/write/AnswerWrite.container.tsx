export {};
// import { useMutation, useQuery } from "@apollo/client";
// import { useRouter } from "next/router";
// import { ChangeEvent, useState } from "react";
// import {
//   IMutation,
//   IMutationCreateUseditemQuestionAnswerArgs,
//   IMutationUpdateUseditemQuestionAnswerArgs,
//   IQuery,
//   IQueryFetchUseditemQuestionAnswersArgs,
// } from "../../../../../commons/types/generated/types";
// import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../list/AnswerList.queries";
// import AnswerWriteUI from "./AnswerWrite.presenter";
// import {
//   CREATE_USED_ITEM_QUESTION_ANSWER,
//   UPDATE_USED_ITEM_QUESTION_ANSWER,
// } from "./AnswerWrite.queries";

// const AnswerWrite = (props) => {
//   // const [value, setValue] = useState(3); 이거 레이팅 값인것 같다.
//   const [createUseditemQuestionAnswer] = useMutation<
//     Pick<IMutation, "createUseditemQuestionAnswer">,
//     IMutationCreateUseditemQuestionAnswerArgs
//   >(CREATE_USED_ITEM_QUESTION_ANSWER);

//   const [updateUseditemQuestionAnswer] = useMutation<
//     Pick<IMutation, "updateUseditemQuestionAnswer">,
//     IMutationUpdateUseditemQuestionAnswerArgs
//   >(UPDATE_USED_ITEM_QUESTION_ANSWER);

//   const { data, refetch } = useQuery<
//     Pick<IQuery, "fetchUseditemQuestionAnswers">,
//     IQueryFetchUseditemQuestionAnswersArgs
//   >(FETCH_USED_ITEM_QUESTION_ANSWERS, {
//     variables: { useditemQuestionId: String(props.questionId) },
//   });
//   const [Contents, setContents] = useState("");

//   const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
//     setContents(event.target.value);
//   };

//   const onClickAddAnswer = async () => {
//     await createUseditemQuestionAnswer({
//       variables: {
//         useditemQuestionId: String(props.questionId),
//         createUseditemQuestionAnswerInput: { contents: Contents },
//       },
//     });
//     refetch();
//   };

//   return (
//     <AnswerWriteUI
//       onChangeContents={onChangeContents}
//       onClickAddAnswer={onClickAddAnswer}
//       data={data}
//       refetch={refetch}
//     />
//   );
// };
// export default AnswerWrite;
