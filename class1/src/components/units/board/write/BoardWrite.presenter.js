import { MyInput,MyButton } from "./BoardWrite.styles"
export default function BoardWriteUI(props){
    return(
        <>
        작성자:<MyInput type="text" onChange={props.aaa}/><br/>
        제목: <MyInput type="text" onChange={props.bbb}/><br/>
        내용: <MyInput type="text" onChange={props.ccc}/><br/>
        {/* <MyButton onClick={props.ggg?props.xxx:props.zzz} qqq={props.qqq}>게시물{props.ggg?"수정":"등록"} 하기!!</MyButton> */}
        {!props.ggg&&<MyButton onClick={props.zzz} qqq={props.qqq}>게시물등록 하기!!</MyButton>}
        {props.ggg&&<MyButton onClick={props.xxx} qqq={props.qqq}>게시물수정 하기!!</MyButton>}
    </>
    )
}