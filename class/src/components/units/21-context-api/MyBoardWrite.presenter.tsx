import { useContext } from "react"
import { myContext } from "../../../../pages/21-04-context-api"

export default function MyBoardWriteUI(){
    const {isEdit} = useContext(myContext)
   // return <div>{props.isEdit ? "수정하기" : "등록하기"}</div>

    return <div>{isEdit ? "수정하기" : "등록하기"}</div>
}