// import * as S from "./QuestionsWrite.Styles";
// import { IQuestionsWritePropsUIProps } from "./QuestionsWrite.Types";

// const QuestionsWriteUI = (props: IQuestionsWritePropsUIProps) => {
//   return (
//     <S.Wrapper>
//       {!props.isEdit && (
//         <S.Comment_Header>
//           <S.MyIcon id="Comment_Icon" />
//           <span>상품문의</span>
//         </S.Comment_Header>
//       )}
     
//       <S.Comment_InputWrapper_Contents>
//           <S.Comment_Contents
//             maxLength={100} //100글자까지만 입력하게 해주는기능
//             defaultValue={props.el?.contents}
//             onChange={props.onChangeContents}
//             placeholder="내용을 작성개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.해주세요."
//           />

      
//           <S.Comment_Contents_Footer>
//                 <S.Comment_Contents_Typing_Count>
//                   {props.Contents.length}/100
//                 </S.Comment_Contents_Typing_Count>
//                 <S.Comment_Contents_Button
//                   onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
//                 >
//                   {props.isEdit ? "수정하기" : "등록하기"}
//                 </S.Comment_Contents_Button>
//           </S.Comment_Contents_Footer>
//       </S.Comment_InputWrapper_Contents>
//     </S.Wrapper>
//   );
// };
// export default QuestionsWriteUI;
